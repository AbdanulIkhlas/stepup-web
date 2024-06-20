import moment from "moment";

export const DateConverter = ({ date }) => {
    const formattedDate = moment(date).format('DD MMMM YYYY');
    return <p className="text-sm font-semibold">{formattedDate}</p>;
  };