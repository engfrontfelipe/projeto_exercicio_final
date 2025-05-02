class ModelRest {
  title: string;
  text: string;
  image: string;
  id: number;
  tag: string;
  val: string;
  tagTwo?: string;

  constructor(
    title: string,
    text: string,
    image: string,
    id: number,
    tag: string,
    tagTwo: string,
    val: string,

  ) {
    this.title = title;
    this.text = text;
    this.image = image;
    this.id = id;
    this.tag = tag;
    this.tagTwo = tagTwo
    this.val = val
  }
}

export default ModelRest;
