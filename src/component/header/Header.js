import React from "react";
import useStyle from "./styles";
import { ButtonBase} from "@material-ui/core";



function Header() {
    const classes = useStyle();

  return (
    <header className={classes.root}>
        <ul className={classes.headNav}>
        <li className={classes.headNavItems}><ButtonBase className={classes.navBtn}> صفحه اصلی</ButtonBase></li>
        <li className={classes.headNavItems}><ButtonBase className={classes.navBtn}>خدمات ما </ButtonBase></li>
        <li className={classes.headNavItems}><ButtonBase className={classes.navBtn}>درباره ما</ButtonBase></li>
        <li className={classes.headNavItemEnd}><ButtonBase className={classes.navBtn}>تماس با ما</ButtonBase></li>
        </ul>
    </header>
  );
}

export default Header;