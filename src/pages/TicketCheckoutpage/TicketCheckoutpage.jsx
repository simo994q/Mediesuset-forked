import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export const TicketCheckoutpage = () => {
  const { id } = useParams();

  const ticketDetails = useFetch(
    `https://api.mediehuset.net/mediesuset/tickets/${id}`
  );

  console.log("ID", id);
  console.log("Ticket details", ticketDetails);

  return <div>{ticketDetails?.item?.name}</div>;
};
