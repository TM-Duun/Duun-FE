import { Link } from "react-router-dom";
import { Circle, MenuItemTitle, MpMenu, MpMenuItem, Wrapper } from "./MpContainerStyles";
import { menuItems } from "./MpMenuData";

interface MenuItem {
  name: string;
  link: string;
}

interface MenuProps {
  title: string;
  items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ title, items }) => {
  return (
    <MpMenu>
      <Circle src="/circle.svg"/>
      <MenuItemTitle>{title}</MenuItemTitle>
      {items.map(({ name, link }) => (
        <MpMenuItem key={ name }>
          <Link to={ link }>{ name }</Link>
        </MpMenuItem>
      ))}
    </MpMenu>
  );
};

export default function MpContainer() {

  return (
    <Wrapper>
      {menuItems.map((menu) => (
        <Menu key={ menu.title } title={ menu.title } items={ menu.items } />
      ))}
    </Wrapper>
  )
}
