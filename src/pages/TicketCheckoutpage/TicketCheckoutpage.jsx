import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Title } from "../../components/Title/Title";
import style from './TicketCheckout.module.scss'
import { CheckoutInfo } from "../../components/CheckoutInfo/CheckoutInfo";
import { OrderDetails } from "../../components/OrderDetails/OrderDetails";

export const TicketCheckoutpage = () => {
  const { id } = useParams();

  const ticketDetails = useFetch(
    `https://api.mediehuset.net/mediesuset/tickets/${id}`
  );

  console.log("ID", id);
  console.log("Ticket details", ticketDetails);

  return (
    <>
      <Title title={'BILLETTER'} />
      <div className={style.wrapper}>
        <div className={style.darkHeading}>
          <p>INFORMATION OM DEN VALGTE BILLET</p>
        </div>

        <section className={style.info}>
          <h1>{ticketDetails?.item.name}</h1>

          <p>{ticketDetails?.item.description}</p>
        </section>

        <div className={style.darkHeading}>
          <p>BESTILLING</p>
        </div>

        <CheckoutInfo details={ticketDetails}/>

        <OrderDetails />

      </div>
    </>
  )
};
