
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
                     title: 'Training',
                     text:'Course duration - x class / daily - x-y hours / Course type - online / As a result of the course, you will know what the market is, how it works, how to make money on this movement. You will be able to independently manage your account and From time to time you will have the opportunity to receive an online consultation',
                     armenia:'Armenia, Yerevan',
                     linktraining:'Training',
                     linkinvestment:'Investments',
                     linkSupport:'Online Support',

                   },
                   armenian :{
                     about:'Մեր մասին',
                     product:'Ծառայություններ',
                     title:'Դասընթաց',
                     text:"Դասընթացի տևողությունը - x դաս/Օրական-x-y ժամ/Դասընթացի տեսակ-Օնլայն/Դասընթացի արդյունքում Դուք կիմանաք , թե ինչ է շուկան, ինչպես է այն աշխատում և ինչպես այդ շարժից ստանալ եկամուտ։ Կկարողանաք ինքնուրույն Ձեր հաշիվը և պարբերաբար հնարավորություն կունենաք ստանալ օնլայն խորհրդատվություն։",
                     armenia:'Հայաստան, Երևան',
                     linktraining:'Դասընթաց',
                     linkinvestment:'Ներդրումներ',
                     linkSupport:'Օնլայն աջակցություն',

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
           