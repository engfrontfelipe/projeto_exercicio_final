class ModelRest {
  title: string;
  text: string;
  image: string;
  id: number;
  children: string;

  constructor(
    title: string,
    text: string,
    image: string,
    id: number,
    children: string,
  ) {
    this.title = title;
    this.text = text;
    this.image = image;
    this.id = id;
    this.children = children;
  }
}

export default ModelRest;
