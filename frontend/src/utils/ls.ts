class localstorageUtils {
  private key: string;
  constructor(key: string) {
    this.key = key;
  }
  get(): string | null {
    return localStorage.getItem(this.key);
  }
  set(value: string): void {
    localStorage.setItem(this.key, value);
  }
}

const ls = new localstorageUtils("token");

export default ls;
