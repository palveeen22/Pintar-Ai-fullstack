import { format, parseISO, formatDistanceToNow } from "date-fns";

const DateChnage = (dateString: string): string => {
	const date = parseISO(dateString);
	const formattedDate = format(date, "MMMM d, yyyy");
	const relativeTime = formatDistanceToNow(date);

	return `${formattedDate} (${relativeTime} ago)`;
};

export default DateChnage;
