import { atom } from "recoil";

const activeLoginAtom = atom({
  key: "activeLoginAtom",
  default: [{ id: "sanghyeon", pw: "sh123" }],
});

const activeIdAtom = atom({
  key: "activeIdAtom",
  default: "",
});

const dataBaseAtom = atom({
  key: "dataBaseAtom",
  default: {
    sanghyeon: {
      DC: "",
      PC: "",
      shipping: "",
      detail1: {
        sub1: [
          "https://www.dropbox.com/scl/fi/qqr22c49el9ky8knqwa3f/1_-_.jpg?rlkey=u0f0wtbcgb921yc4mi7lpcd29&raw=1",
        ],
        sub2: [
          "https://www.dropbox.com/scl/fi/inm1r6evdhtqqpq1r1uo5/1_-_.jpg?rlkey=imt8qwcqwakvpn6glzh29s3b5&raw=1",
        ],
        sub3: [
          "https://www.dropbox.com/scl/fi/ermauj3k0xvpjaehfkmhh/1_-_.jpg?rlkey=svgqb3snz2ijcunb5xeyoe4vi&raw=1",
        ],
        sub4: [
          "https://www.dropbox.com/scl/fi/kh8jbfsavnvq8r9dst3ey/1_-_.jpg?rlkey=7iknhkmwgn2v5g5q0pnpdkffw&raw=1",
        ],
        sub5: [
          "https://www.dropbox.com/scl/fi/6vy83z4z6wp88gmtxjy6m/1_-_-_1.jpg?rlkey=tpnsydd03ca03rhjplb9fyjex&raw=1",
        ],
      },
      image_1: {
        main: "https://www.dropbox.com/scl/fi/kzusug0qortx12zvwmzjp/Group-6.png?rlkey=1pa5v7upjehgg72vaqypo7pw9&raw=1",
        sub: [
          "https://www.dropbox.com/scl/fi/a5rubzcv88crns11csk1v/1.png?rlkey=lj33h19b32e9okowkqaa1ckz6&raw=1",
          "https://www.dropbox.com/scl/fi/9verw4rls1qb579gs99gs/2.png?rlkey=r5182sdf6n1d5vnci6ukegm4x&raw=1",
          "https://www.dropbox.com/scl/fi/kp8lz20hhyfcmrkxnrhlw/3.png?rlkey=kolbz91r4q8an8cae1at7i0ax&raw=1",
          "https://www.dropbox.com/scl/fi/vu1rh5hr4k55t9440zd62/4.png?rlkey=bvz5qgyd6qkqjpd7cwpso09z7&raw=1",
          "https://www.dropbox.com/scl/fi/hwiisctqdedyt89gqx8ln/5.png?rlkey=lmnzqwi3vmip01xc10kc63qzm&raw=1",
        ],
      },
      order: {
        active: ["상의.S", "하의.S", "모자.FREE", "가방.FREE", "신발.260"],
        orderList: [
          {
            상의: {
              brand: "미러레이크",
              image:
                "https://www.dropbox.com/scl/fi/ubj8qqkznfvatrd3bpxr7/123144352345fg.png?rlkey=47z5vmme0t2fnrufchr9wjlb4&raw=1",
              name: "스냅 포인트 셔츠",
            },
          },
          {
            하의: {
              brand: "르꼬끄 골프",
              image:
                "https://www.dropbox.com/scl/fi/32cejog8sz8n4k5rkau1v/3264067_16836086907523_500-1.png?rlkey=afythh3r449sfo4nidstevtmw&raw=1",
              name: "남성 클래식 스트레치 반바지",
            },
          },
          {
            모자: {
              brand: "미러레이크",
              image:
                "https://www.dropbox.com/scl/fi/1ilhds61xkuzghgmps0yn/3412128_16895749585594_500-1.png?rlkey=ghsvho6efue89x9wzuzbhgukq&raw=1",
              name: "UNISEX ML LOGO BUCKET HAT",
            },
          },
          {
            가방: {
              brand: "제로 할리버튼 골프",
              image:
                "https://www.dropbox.com/scl/fi/spadh5djkxnwx9d93lxcj/3217587_16808652395110_500-1.png?rlkey=66r25qu7kaiyfmeqra3wxbizw&raw=1",
              name: "CORDURA RIPSTOP Series Medium Locker Tote",
            },
          },
          {
            신발: {
              brnad: "나이키",
              image:
                "https://www.dropbox.com/scl/fi/kn04v1r6711uzpvw2jjqk/2985774_16835982328805_big-1.png?rlkey=rjyzvqhk791dcd9z49fuufoxa&raw=1",
              name: "에어맥스90 골프화",
            },
          },
        ],
      },
      size1: {
        SizeTitle: ["상의.S", "하의.S", "모자.FREE", "가방.FREE", "신발.260"],
        가방: ["FREE"],
        모자: ["FREE"],
        상의: ["S", "M", "L", "XL"],
        신발: ["250", "255", "260", "265", "270"],
        하의: ["S", "M", "L", "XL"],
      },
    },
  },
});

const selectedMainAtom = atom({
  key: "selectedMainAtom",
  default: "1",
});

const selectedSubAtom = atom({
  key: "selectedSubAtom",
  default: "",
});

const activeOrderListAtom = atom({
  key: "activeOrderListAtom",
  default: "",
});

const orderCountAtom = atom({
  key: "orderCountAtom",
  default: "",
});

const shippingCountAtom = atom({
  key: "shippingCountAtom",
  default: "",
});

const dcCountAtom = atom({
  key: "dcCountAtom",
  default: "",
});

const orderDataAtom = atom({
  key: "orderDataAtom",
  default: "",
});

const activeRefundAtom = atom({
  key: "activeRefundAtom",
  default: "",
});

export {
  activeRefundAtom,
  orderDataAtom,
  orderCountAtom,
  shippingCountAtom,
  dcCountAtom,
  activeLoginAtom,
  dataBaseAtom,
  selectedMainAtom,
  activeIdAtom,
  selectedSubAtom,
  activeOrderListAtom,
};
