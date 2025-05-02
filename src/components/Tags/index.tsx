import { TagContainer } from "./style";

export type Props = {
  tag?: string;
  tagTwo?: string; 
};

const Tag = ({ tag }: Props) => {
  return <TagContainer tag={tag} tagTwo={tag} />;
};

export default Tag;
