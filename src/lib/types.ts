export interface CalendarEvent {
	title: string;
	published: string;
	summary: string;
	imgUrl: string;
	link: string;
}

export interface Article {
	title: string;
	published: string;
	summary: string;
	imgUrl: string;
	link: string;
}

export type JRDays = {
	mon: boolean;
	tue: boolean;
	wed: boolean;
	thu: boolean;
	fre: boolean;
	sat: boolean;
	sun: boolean;
};

export type JRClass = {
	category1: string;
	start_time: string;
	end_time: string;
	start_date: string;
	end_date: string;
	instructors: string[];
	meeting_days: JRDays;
	name: string;
	online_reg_link: string;
	openings: {
		calculated_openings: number;
		days: {
			[K in keyof JRDays]: number;
		};
	};
};
