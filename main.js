// const root=document.getElementById("root");

// const link="https://nepalcorona.info/api/v1/news?limit=2";
// fetch(link).then(res=>{
//     return res.json();
// }).then(obj=>{
//     console.log(obj.data[0]);
//     root.innerHTML=`
//     <div class="container">
//    <h1> ${obj.data[0].title}</h1>
//    <a href="${obj.data[0].url}"><img src="${obj.data[0].image_url}"></a>
//    <p>${obj.data[0].summary}</p>
//     </div>
    
//     `;
// }).catch(err=>{
//     console.log(err);
// });

const totalCases=document.getElementById("totalCases");

totalCases.innerText="5678";

const newsTitle=document.getElementById("newsTitle");
const newsImg=document.getElementById("newsImg");
const newsSummary=document.getElementById("newsSummary");
const newsUrl=document.getElementById("newsUrl");
let title,img,summary,url;
const news=[{title,img,summary,url}];
const coronaVirusNewsApi="https://nepalcorona.info/api/v1/news?limit=10";
const coronaVirusDataNepal="https://nepalcorona.info/api/v1/data/nepal";
const coronaVirusDataWorld="https://nepalcorona.info/api/v1/data/world";

//get data for Nepal
fetch(coronaVirusDataNepal).then(res=>res.json()).then(res=>{
    document.getElementById("totalTested").innerText=res.tested_total;
    document.getElementById("testedPositive").innerText=res.tested_positive;
    document.getElementById("testedNegative").innerText=res.tested_negative;
    console.log(res.tested_total);
});

//get data for world
fetch(coronaVirusDataWorld).then(res=>res.json()).then(res=>{
   document.getElementById("totalCases").innerText=(res[((res.length)-1)].totalCases);
   document.getElementById("newCases").innerText=(res[((res.length)-1)].newCases);
   document.getElementById("totalDeaths").innerText=(res[((res.length)-1)].totalDeaths);
   document.getElementById("newDeaths").innerText=(res[((res.length)-1)].newDeaths);
   document.getElementById("activeCases").innerText=(res[((res.length)-1)].activeCases);
   document.getElementById("totalRecovered").innerText=(res[((res.length)-1)].totalRecovered);
   document.getElementById("criticalCases").innerText=(res[((res.length)-1)].criticalCases);
})



// fetch data for news
fetch(coronaVirusNewsApi).then(res=>{
    return res.json();
}).then(res=>{
// console.log(res);
for(let i=0;i<10;i++){
    // console.log(res.data[i]);
   
    const newsDiv=document.createElement('div');
    newsDiv.className="news";
    const h1=document.createElement("h1");
    h1.setAttribute("id","newsTitle");
    h1.innerText=res.data[i].title;
    const img=document.createElement("img");
    img.setAttribute("id","newsImg");
    img.setAttribute("src",res.data[i].image_url);
    img.setAttribute("alt","news-img");
    const p=document.createElement("p");
    p.setAttribute("id","newsSummary");
    p.innerText=res.data[i].summary;
    const a=document.createElement("a");
    a.setAttribute("href",res.data[i].url);
    a.innerText="Read more at";
console.log(res.data[i].img_url);
    newsDiv.appendChild(h1);
    newsDiv.appendChild(img);
    newsDiv.appendChild(p);
    newsDiv.appendChild(a);

    const containerDiv=document.querySelector(".news-container");

    containerDiv.appendChild(newsDiv);  
    
}
});


