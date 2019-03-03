const IMAGES_PER_PAGE = 10;

export class ImageService {
  apiUrl: string;
  // use cache because width and hight is random 
  // for each new generated picture url
  cache: object;

  constructor() {
    this.apiUrl = 'https://picsum.photos/';
    this.cache = {};
  }

  getImagesForPage(page: number = 1) {
    if (this.cache[page]) {
      return this.cache[page];
    }

    let offset = IMAGES_PER_PAGE * (page - 1) + 1 || 1;
    let imgs = this.generateImageLinks(IMAGES_PER_PAGE, offset);

    this.cache[page] = imgs;
    return imgs;
  }

  /** Generate links to images with random size from picsum.photos */
  generateImageLinks(count: number, offset: number): string[] {
    let fileNames = [];
    for (let _i = offset; _i < count + offset; _i++) {
      let width = this.getRandomArbitrary(200, 500);
      let height = this.getRandomArbitrary(200, 500);
      let fileName = `${this.apiUrl}/${width}/${height}/?image=${_i}`;
      fileNames.push(fileName);
    }
    return fileNames;
  }

  getRandomArbitrary(min:number, max:number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
