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



const newsTitle=document.getElementById("newsTitle");
const newsImg=document.getElementById("newsImg");
const newsSummary=document.getElementById("newsSummary");
const newsUrl=document.getElementById("newsUrl");
let title,img,summary,url;
const news=[{title,img,summary,url}];
const coronaVirusNewsApi="https://nepalcorona.info/api/v1/news?limit=10";
const coronaVirusDataNepal="https://nepalcorona.info/api/v1/data/nepal";
const coronaVirusDataWorld="https://data.nepalcorona.info/api/v1/world";

//get data for Nepal
fetch(coronaVirusDataNepal).then(res=>res.json()).then(res=>{
    console.log(res);
    document.getElementById("totalTested").innerText=res.tested_total;
    document.getElementById("testedPositive").innerText=res.tested_positive;
    document.getElementById("testedNegative").innerText=res.tested_negative;
    document.getElementById("deathsNepal").innerText=res.deaths;
    document.getElementById("recoveredNepal").innerText=res.recovered;
    document.getElementById("quarantinedNepal").innerText=res.quarantined;
    document.getElementById("In-isolation").innerText=res.in_isolation;
    document.getElementById("Total RDT").innerText=res.tested_rdt;
});

//get data for world
fetch(coronaVirusDataWorld).then(res=>res.json()).then(res=>{
   document.getElementById("totalCases").innerText=(res.cases);
   document.getElementById("newCases").innerText=(res.todayCases);
   document.getElementById("totalDeaths").innerText=(res.deaths);
   document.getElementById("newDeaths").innerText=(res.todayDeaths);
   document.getElementById("activeCases").innerText=(res.active);
   document.getElementById("totalRecovered").innerText=(res.recovered);
   document.getElementById("criticalCases").innerText=(res.critical);
})



// fetch data for news
fetch(coronaVirusNewsApi).then(res=>{
    return res.json();
}).then(res=>{
// console.log(res);
for(let i=0;i<10;i++){
    // console.log(res.data[i]);
    const row=document.createElement('div');
    row.className="row";
    const col = document.createElement('div');
    col.className='col-lg-6 col-xs-12 col-md-6 news';
    col.setAttribute('id', 'newsColumn');
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
    // console.log(res.data[i].img_url);
    col.appendChild(h1);
    col.appendChild(img);
    col.appendChild(p);
    col.appendChild(a);
    row.appendChild(col);

    const containerDiv=document.querySelector(".news-container");

    containerDiv.appendChild(row);  
    
}
});


