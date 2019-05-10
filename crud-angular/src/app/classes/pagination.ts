export class Pagination {
  page: number;
  size: number;
  totPage: number;
  totElement: number;

  constructor(page: number, size: number) {
    this.page = page;
    this.size = size;
  }
}
