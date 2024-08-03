import "./works.scss";
import {
  PhoneIphone,
  ArrowForwardIos,
  ArrowBackIos,
  Public,
  Storefront,
} from "@material-ui/icons";
import { useState } from "react";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      img: "https://reactjs.org/logo-og.png",
      title: "React",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nostrum temporibus autem.",
      icon: <PhoneIphone />,
    },
    {
      id: 2,
      img: "https://daqxzxzy8xq3u.cloudfront.net/wp-content/uploads/2019/04/21032431/redux-cover-imgage-1024x768.jpg",
      title: "Redux",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nostrum temporibus autem.",
      icon: <Public />,
    },
    {
      id: 3,
      img: "https://miro.medium.com/max/1000/1*fsseXIPGEhwmg6kfgXyIjA.jpeg",
      title: "NodeJs",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nostrum temporibus autem.",
      icon: <Storefront />,
    },
    {
      id: 4,
      img: "https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png",
      title: "MongoDB",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nostrum temporibus autem.",
      icon: <Storefront />,
    },
    {
      id: 5,
      img: "https://dh.virginia.edu/system/files/styles/large/private/MySQL.PNG?itok=y4tI90y8",
      title: "MySQL",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nostrum temporibus autem.",
      icon: <Storefront />,
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  // const [boxContainer, setBoxContainer] = useState();

  // for(let i = 0; i<365; i++){

  //   const list = [
  //     0, 1, 2, 3, 41, 42, 43, 44, 82, 83, 123, 124, 125, 126, 164, 165, 166, 167,
  //     205, 206, 246, 247, 287, 288, 5, 6, 46, 47, 87, 88, 128, 129, 169, 170, 210,
  //     211, 251, 252, 292, 293, 8, 9, 14, 15, 49, 50, 51, 90, 91, 92, 131, 132,
  //     133, 134, 172, 173, 213, 214, 254, 255, 295, 296, 175, 176, 217, 177, 218,
  //     259, 55, 56, 96, 97, 137, 138, 178, 179, 219, 220, 260, 261, 217, 218, 259,
  //     260, 261, 301, 302, 17, 18, 19, 58, 59, 60, 61, 99, 100, 102, 103, 140, 141,
  //     144, 181, 182, 185, 222, 223, 225, 226, 263, 264, 265, 266, 304, 305, 306,
  //     24, 25, 65, 66, 67, 106, 107, 108, 147, 148, 149, 150, 188, 189, 229, 230,
  //     270, 271, 311, 312, 67, 108, 149, 150, 191, 232, 192, 233, 274, 234, 275,
  //     316, 194, 235, 276, 154, 195, 236, 73, 114, 155, 33, 34, 74, 75, 115, 116,
  //     156, 157, 197, 198, 238, 239, 279, 280, 320, 321, 36, 37, 38, 39, 77, 78,
  //     79, 80, 118, 119, 159, 160, 161, 162, 200, 201, 202, 203, 241, 242, 282,
  //     283, 284, 285, 323, 324, 325, 326,
  //   ];
  
  
  //   const el = document.createElement("div")
  //   el.classList = list.includes(i) ? "box active" : "box"
  //   setBoxContainer(el)
  //   break;
  // }


  return (
    <div className="works" id="works">
      <div className="stack">Stacks</div>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 90}vw)` }}
      >
        {data.map((d) => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  {/* <div className="imgContainer">{d.icon}</div> */}
                  <h2>{d.title}</h2>
                  {/* <p>{d.desc}</p> */}
                  {/* <span>Projects</span> */}
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="arrow left" onClick={() => handleClick("left")}>
        <ArrowBackIos />
      </div>
      <div className="arrow right" onClick={() => handleClick("right")}>
        <ArrowForwardIos />
      </div>

      <div class="boxContainer"></div>
    </div>
  );
}
