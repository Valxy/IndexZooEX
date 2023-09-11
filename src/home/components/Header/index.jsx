import { Button, Menu, MenuItem, Popover } from "@mui/material";
import { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./index.module.css";
import { PhotoSizeSelectActual } from "@mui/icons-material";
import { useRef } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if(!menuRef.current.contains(e.target)) {
        setOpen(false);
      }  
    };

    document.addEventListener("mousedown", handler);
    return() => {
      document.removeEventListener("mousedown", handler);
    }
  })

  return (
    <div>
      <div className={styles.mobile_header_container}>
        <div className={styles.mobile_header_left}>
          <img src={"/logo_mobile.png"} alt="Zoo Logo" className={styles.mobile_logo} />
        </div>
        <div className={styles.mobile_header_right}>
          <Button style={{fontFamily: 'Inter'}} className={styles.mobile_enter}>
            Enter the Zoo
          </Button>
          <img src={"/mobile_more_btn.png"} alt="More Button" className={styles.more_btn} />
        </div>
      </div>

      <div className={styles.header_container}>
        <img src={"/logo.png"} alt="" className={styles.header_container_left} />
        <div className={styles.header_container_right} ref={menuRef}>
          <div>
            <Button 
              id="basic-button"
              endIcon={<KeyboardArrowDownIcon />}
              style={{
                color: "white",
                textTransform: "capitalize",
                fontSize: "16px",
                marginTop: "38px",
                fontFamily: 'Inter',
              }}
              onClick={()=>{setOpen(!open)}}
            >
              Products
            </Button>
            <div className={`${open ? styles.active : styles.inactive} ${styles.dropdown_menu}` }>
              <div>
                <DropdownItem img="/bear.png" text={"Bear"} link="https://github.com"/>
                <DropdownItem img="/bull.png" text={"Bull"} link="https://github.com"/>
                <DropdownItem img="/zoo.png" text={"ZooEx"} link="https://github.com"/>
              </div>
            </div>
          </div>

          <div style={{ paddingLeft: "32px", }}>
            <Button
              style={{
                color: "white",
                textTransform: "capitalize",
                fontSize: "16px",
                marginTop: "38px",
                fontFamily: 'Inter',
              }}
            >
              {/* {"Zoo Doc"} */}
              Zoo Doc
            </Button>
          </div>

          <div style={{ paddingLeft: "20px", }} >
            <Button style={{fontFamily: 'Inter',}} className={styles.header_container_right_enter}>
              Enter the Zoo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const DropdownItem = (props) => {

  const handleClick = () => {
    console.log("hi there", props.text);
    window.open(props.link)
  }

  return (
    <Button 
      onClick={handleClick}
      sx={{
        '&:hover': {
          color: '#1CCD58',
          backgroundColor: 'yellow',
          backgroundColor: 'rgba(121, 255, 167, 0.04)',
          boxShadow: '0px 0px 40px 0px rgba(0, 0, 0, 0.20)',
          backdropFilter: 'blur(45px)',
        },
        width: '100%',
        borderRadius: "10px",
        color: "white", 
        textTransform: "capitalize",
        fontFamily: 'Inter',
        fontSize: "14px",
      }}
      >       
      <div className={styles.dropdownItem} >
        <img src={props.img} alt="" />
        <p className={styles.itemText}>{props.text}</p>
      </div>
    </Button>
  );
}

export default Header;


{/* <div>
<Button
  id="basic-button"
  aria-controls={open ? "basic-menu" : undefined}
  aria-haspopup="true"
  aria-expanded={open ? "true" : undefined}
  onClick={() => {
    setOpen(true);
  }}
  endIcon={<KeyboardArrowDownIcon />}
  style={{
    color: "white",
    textTransform: "capitalize",
    fontSize: "16px",
    marginTop: "38px",
  }}
>
  Products
</Button>
<Menu
  id="basic-menu"
  open={open}
  anchorEl={open}
  onClose={() => {
    setOpen(false);
  }}
  MenuListProps={{
    "aria-labelledby": "basic-button",
  }}
>
  <MenuItem>Bear</MenuItem>
  <MenuItem>Bull</MenuItem>
  <MenuItem>ZooEx</MenuItem>
</Menu>
</div> */}