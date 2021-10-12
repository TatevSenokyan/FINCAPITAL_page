
              const aboutEl=document.querySelector('.about')
              const productEl=document.querySelector('.product')
              const titleEl=document.querySelector('.title')
              const textEl=document.querySelector('.text')
              const armeniaEl=document.querySelector('.armenia')
              const linktrainingEl=document.querySelector('.linkTraining')
              const linkinvestmentEl=document.querySelector('.linkInvestment')
              const linkSupportEl=document.querySelector('.linkSupport')
              const activeEl=document.querySelector('.active')
              const nonActiveEl=document.querySelector('.langContent>a')


                 let data={
                   english: {
                     about:'About us',
                     product:'Products',
                     title: 'Investments',
                     linktraining:'Training',
                     linkinvestment:'Investments',
                     linkSupport:'Online Support',
                     text:'Founded in Armenia 07/01/2021. k: We conduct scalping (trading) courses / We provide investment services. We cooperate with a number of foreign organizations.',
                     armenia:'Armenia, Yerevan'

                   },
                   armenian :{
                     about:'Մեր մասին',
                     product:'Ծառայություններ',
                     linktraining:'Դասընթաց',
                     linkinvestment:'Ներդրումներ',
                     linkSupport:'Օնլայն աջակցություն',
                     title:'Ներդրումներ',
                     text:"Ներդրումային ծառայությունները նրանց համար են, ովքեր ունեն ֆինանս և ցանկանում են դրա միջոցով գումար վաստակել ուղղակի չգիտեն թե ինչպես կարելի է դա անել առանց ավելորդ ռիսկերի և պրոֆեսիոնալ ձևով։ Մեր մասսագետները Ձեզ կօգնեն գրագետ ձևով ներդրումներ կատարել և խուսափել ավելորդ ռիսկերից։ Արդյունքում ունենակ դիվերսիֆիկացված ներդրում և կստանաք բավականություն ամբողջ պրոցեսից։",
                     armenia:'Հայաստան, Երևան'

                   }
                 }
           
           let attr=localStorage.getItem("lang");
           attr=='english'?activeEl.textContent='EN':activeEl.textContent='ARM'
           attr=='english'?nonActiveEl.textContent='ARM':nonActiveEl.textContent='EN'
           attr=='armenian'?activeEl.textContent='ARM':activeEl.textContent='EN'
           attr=='armenian'?nonActiveEl.textContent='EN':nonActiveEl.textContent='ARM'
           attr=='english'?nonActiveEl.setAttribute('language','armenian'):nonActiveEl.setAttribute('language','english')
           aboutEl.textContent=data[attr].about
           productEl.textContent=data[attr].product
           titleEl.textContent=data[attr].title
           textEl.textContent=data[attr].text
           armeniaEl.textContent=data[attr].armenia
           linktrainingEl.textContent=data[attr].linktraining
           linkinvestmentEl.textContent=data[attr].linkinvestment
           linkSupportEl.textContent=data[attr].linkSupport
          
             nonActiveEl.addEventListener('click',()=>{
              let attr=nonActiveEl.getAttribute('language')
              activeEl.textContent=='EN'?activeEl.textContent='ARM':activeEl.textContent='EN'
              nonActiveEl.textContent=='ARM'?nonActiveEl.textContent='EN':nonActiveEl.textContent='ARM'
              attr=='english'?nonActiveEl.setAttribute('language','armenian'):nonActiveEl.setAttribute('language','english')
              localStorage.setItem("lang", attr)
              aboutEl.textContent=data[attr].about
              productEl.textContent=data[attr].product
              titleEl.textContent=data[attr].title
              textEl.textContent=data[attr].text
              armeniaEl.textContent=data[attr].armenia
              linktrainingEl.textContent=data[attr].linktraining
              linkinvestmentEl.textContent=data[attr].linkinvestment
              linkSupportEl.textContent=data[attr].linkSupport
             })
          