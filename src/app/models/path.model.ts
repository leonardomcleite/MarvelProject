export class PathModel {
   public paths: string[];

   public constructor(paths: string[] = []) {
        this.paths = paths.slice();
    }

    public static create(path: string): PathModel {
        return new PathModel().addPath(path);
    }

    public addPath(path: string | any): PathModel {
        const newPaths: string[] = this.paths.slice();

        if (!(typeof path === 'string')) {
            path = '' + path;
        }

        if (path) {
            (<string>path).trim()
                .split('/')
                .forEach(subpath => {
                    if (subpath) {
                        newPaths[newPaths.length++] = subpath;
                    }
                });
        }

        return new PathModel(newPaths);
    }

    public resolvePathParams(pathParams: any): PathModel {
        const newPaths = [];
        this.paths.forEach(path => {
            let value: any = path;
            if (pathParams && path.indexOf('{') > -1 && path.indexOf('}') > -1) {
                value = pathParams[path.replace('\{', '').replace('\}', '')];
            }
            newPaths[newPaths.length++] = value ? value.toString() : '';
        });
        return new PathModel(newPaths);
    }

    public toString(): string {
        let url = '';

        this.paths.forEach(path => {
            if (path) {
                path = path.replace(/\{.*\}/g, ''); // Limpa variáveis não preenchidas
                url += '/'.concat(path);
            }
        });
        return url;
    }
}
