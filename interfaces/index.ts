export interface TestimonialsProps {
	description: string;
	user: {
		name: string;
		role: string;
		avatar: {
			src: string;
			alt?: string;
		}
	}
  }

export interface FAQsProps {
	question: string;
	answer: string;
	image?: string;
	alt?: string;
}