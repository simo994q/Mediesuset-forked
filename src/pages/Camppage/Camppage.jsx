import { useEffect, useState } from "react";
import style from './Camppage.module.scss'
import { Camp } from "../../components/Camp/Camp";
import { CampModal } from "../../components/CampModal/CampModal";

export const Camppage = () => {
  const [campData, setCampData] = useState()

  const [selectedCamp, setSelectedCamp] = useState()
  const [isOpen, setIsOpen] = useState(false)

  console.log(selectedCamp);
  console.log(isOpen);

  console.log(campData);

  useEffect(() => {
    fetch('https://api.mediehuset.net/mediesuset/camps')
      .then(res => res.json())
      .then(data => setCampData(data))
  }, [])

  return (
    <>
      <section className={style.allCampsWrapper}>
        <CampModal isOpen={isOpen} setOpen={setIsOpen} camp={selectedCamp} campData={campData} />
        {campData ?
          <>
            <Camp number={0} setCamp={setSelectedCamp} setOpen={setIsOpen} image={campData.items[0].image} name={campData.items[0].name} shorttext={'Den største af festivalens campingområder med 1200 pladser og mulighed for plads reservation ved bestilling. Alle med armbånd har adgang til denne camps og der er gode toiletforhold og mulighed for bad mod betaling.'}/>
            <Camp number={1} setCamp={setSelectedCamp} setOpen={setIsOpen} image={campData.items[1].image} name={campData.items[1].name} shorttext={'Det kræver et 4 dages partout armbånd at få adgang til Camp Kultunaut, som er festivalens næststørste campingområde. Her er gode toiletforhold, gratis bad og mulighed for strøm. Desuden er der hyggelige cafeer og madsteder på camp området. Denne camp rummer 600 pladser.'}/>
            <Camp number={2} setCamp={setSelectedCamp} setOpen={setIsOpen} image={campData.items[2].image} name={campData.items[2].name} shorttext={'Adgang til Camp De Luxe købes kun i form af et 4 dages De luxe armbånd. Så står der til gengæld også et telt til rådighed, rigtig gode toilet og badeforhold og mulighed for at bestille morgenmad på camp området samt en daglig gratis madbillet til et af festivalens spisesteder. Denne camp rummer 400 pladser.'}/>
          </>
          :
          <div></div>

        }
      </section>
    </>
  )
};
