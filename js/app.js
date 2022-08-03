const chooseColorBtn = document.querySelector('#colorBtn')
const colorPick = document.querySelector('#chooseColor')
const fontSizeInput = document.querySelector('#fontSize')
let fontSize=27
const generateBtn = document.querySelector('#generateBtn')
 
const fontFamily=[
    'customFont1',
    'customFont2',
    'customFont3',
    'customFont4',
    'customFont5',
    'customFont6',
    'customFont7',
    'customFont8',
    'customFont9',
    'customFont10',
    'customFont11',
    'customFont12',
    'customFont13',
    'customFont14',
    'customFont15',
    'customFont16',
    'customFont17',
    'customFont18',
    'customFont19',
    'customFont20',
    'customFont21',
    'customFont22',
    'customFont23',
    'customFont24',
    'customFont25',
    'customFont26',
    'customFont27',
    'customFont28',
    'customFont29',
    'customFont30',
    'customFont31',
    'customFont32',
    'customFont33',
    'customFont34',
    'customFont35',
    'customFont36',
    'customFont37',
    'customFont38',
    'customFont39',
    'customFont40',
    'customFont41',
    'customFont42',
    'customFont43',
    'customFont44',
    'customFont45',
    'customFont46',
    'customFont47',
    'customFont48',
    'customFont49',
    'customFont50',
    'customFont51',
    'customFont52',
    'customFont53',
    'customFont54',
    'customFont55',
    'customFont56',
    'customFont57',
    'customFont58',
    'customFont59',
    'customFont60',
    'customFont61',
    'customFont62',
    'customFont63',
    'customFont64',
    'customFont65',
    'customFont66',
    'customFont67',
    'customFont68',
    'customFont69',
    'customFont70',
    'customFont71',
    'customFont72',
    'customFont73',
    'customFont74',
    'customFont75',
    'customFont76',
    'customFont77',
    'customFont78',
    'customFont79',
    'customFont80',
    'customFont81',
    'customFont82',
    'customFont83',
    'customFont84',
    'customFont85',
    'customFont86',
    'customFont87',
    'customFont88',
    'customFont89',
    'customFont90',
    'customFont91',
    'customFont92',
    'customFont93',
    'customFont94',
    'customFont95',
    'customFont96',
    'customFont97',
    'customFont98'

]
const userText = document.querySelector('#userText')
let color = '#000'
//config of input field
fontSizeInput.addEventListener('change',()=>{
    if(fontSizeInput.value<1){
        fontSizeInput.value=1
    }else if(fontSizeInput.value>100){
        fontSizeInput.value=100

    }
    fontSize=fontSizeInput.value
    //console.log(fontSize)
})


//showing color option
chooseColorBtn.addEventListener('click',()=>{
    document.querySelector('#chooseColor').click()
})
//picking color
colorPick.addEventListener('change',()=>{
    chooseColorBtn.style.backgroundColor = colorPick.value
    color=colorPick.value
    //console.log(document.querySelector('#chooseColor').value)
})

//generate the text
generateBtn.addEventListener('click',()=>{
    document.querySelector('.output_Container').innerHTML=''
    let text = userText.value
    if(text!==''){
    //console.log(text)
    fontFamily.forEach((fontFam)=>{
        let div = document.createElement('div')
        div.className='single_output_wraper'
        div.innerHTML=`<div class="single_output" style="font-family:${fontFam};font-size:${fontSize}px;color:${color}">${text}</div>
        <span class="downloadBtn"> Dowload PNG</span>`

        document.querySelector('.output_Container').appendChild(div)
    })

    document.querySelectorAll('.downloadBtn').forEach((btn)=>{
         btn.addEventListener('click',()=>{
            btn.style.opacity=0
            html2canvas(btn.previousElementSibling.parentElement).then((canvas) => {
               const base64img = canvas.toDataURL('image/png')
               let anchor = document.createElement('a')
               anchor.setAttribute('href',base64img)
               anchor.setAttribute('download',`my-${text}.png`)
               anchor.click()
               anchor.remove() 
               //document.body.appendChild(canvas)
            });
            btn.style.opacity=1

        }) 
    })


}

})




  
