import fs from 'node:fs';
import path from 'node:path';
const outputdir = 'build';

const iterate = (ipath: string) => {
	const files = fs.readdirSync(ipath);

	files.forEach(element => {
		const currentPath = `${ipath}/${element}`;
		const stat = fs.statSync(currentPath);

		if (stat.isFile()) {
			if (element.includes('index.html') || !element.includes('.html')) {
				return;
			}

			const dir = element.split('.')[0];
			const dirPath = `${ipath}/${dir}`;

			if (!fs.existsSync(dirPath)) {
				fs.mkdirSync(dirPath);
			}

			fs.renameSync(currentPath, `${dirPath}/index.html`);

			// replace everything in the capturing group with ../(first capturing group)
			const regex = /"(\.[^"]*)"/g;
			const data = fs.readFileSync(`${dirPath}/index.html`, 'utf8');

			const result = data.replace(regex, '"../$1"');

			fs.writeFileSync(`${dirPath}/index.html`, result, 'utf8');
		}
		else if (stat.isDirectory()) {
			iterate(currentPath);
		}
	});
};

iterate(path.join(process.cwd(), outputdir));