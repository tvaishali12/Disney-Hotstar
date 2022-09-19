const array = [
    {
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6536/846536-v	",
        heading: "BAGHI3",
        subHheading: "2 hr 15 min,comedy",
        discription: "Aset of six lovers had to part ways in 1419.Six centuries later......",
        wish: "ADD TO  WATCHLIST"
    },
    {
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3669/593669-v",
        heading: "HOUSEfull4",
        subHheading: "2 hr 15 min,comedy",
        discription: "Aset of six lovers had to part ways in 1419.Six centuries later......",
        wish: "ADD TO  WATCHLIST"
    },
    {
        img: "	https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7676/647676-v",
        heading: "TANHAJI",
        subHheading: "2 hr 15 min,comedy",
        discription: "Aset of six lovers had to part ways in 1419.Six centuries later......",
        wish: "ADD TO  WATCHLIST"
    },
    {
        img: "	https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5462/245462-v",
        heading: "BAGHI2",
        subHheading: "2 hr 15 min,comedy",
        discription: "Aset of six lovers had to part ways in 1419.Six centuries later......",
        wish: "ADD TO  WATCHLIST"
    },
    {
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/4504/1000034504/1000034504-v	",
        heading: "HIGHWAY",
        subHheading: "2 hr 15 min,comedy",
        discription: "Aset of six lovers had to part ways in 1419.Six centuries later......",
        wish: "ADD TO  WATCHLIST"
    },
    {
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1327/441327-v",
        heading: "JUNGLE",
        subHheading: "2 hr 15 min,comedy",
        discription: "Aset of six lovers had to part ways in 1419.Six centuries later......",
        wish: "ADD TO  WATCHLIST"
    },
    {
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8105/1118105-v-cf275eb3c3f2",
        heading: "BHOOLBHULAIYAA",
        subHheading: "2 hr 15 min,comedy",
        discription: "Aset of six lovers had to part ways in 1419.Six centuries later......",
        wish: "ADD TO  WATCHLIST"
    },
    {
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/580896-v	",
        heading: "CHHICHHORE",
        subHheading: "2 hr 15 min,comedy",
        discription: "Aset of six lovers had to part ways in 1419.Six centuries later......",
        wish: "ADD TO  WATCHLIST"
    }

];
const imgContainer_2 = document.getElementById("img-container-2")
for (let i = 0; i < array.length; i++) {

    const imgContainer = document.createElement("div")
    imgContainer.id = "img-container"

    const imgDiv = document.createElement("div")
    imgDiv.id = "img-div"

    const imgTag = document.createElement("img")
    imgTag.className = "image"
    imgTag.src = array[i].img

    imgDiv.appendChild(imgTag)

    const subdiv = document.createElement("div")
    subdiv.className = "subdiv"

    const heading = document.createElement("div")
    heading.className = "heading"
    heading.innerText = array[i].heading

    const subHheading = document.createElement("div")
    subHheading.className = "subHeading"
    subHheading.innerText = array[i].subHheading

    const discription = document.createElement("div")
    discription.className = "discription"
    discription.innerText = array[i].discription

    const wish = document.createElement("div")
    wish.className = "wish"
    wish.innerText = array[i].wish

    subdiv.appendChild(heading)
    subdiv.appendChild(subHheading)
    subdiv.appendChild(discription)
    subdiv.appendChild(wish)
    imgDiv.appendChild(subdiv)

    imgContainer.appendChild(imgDiv)
    imgContainer_2.appendChild(imgContainer)
}