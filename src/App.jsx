import { useState } from 'react';
import Editor from './components/Editor';
import Previewer from './components/Previewer';

function App() {
	const [resumeData, setResumeData] = useState({
		firstName: 'Joseph',
		lastName: 'Risk',
		email: 'j0srisk@utexas.edu',
		phone: '(936) 647-8636',
		social: 'LinkedIn.com/in/JosephRisk',
		summary:
			'Results-driven graduate with a strong academic background in software development, data analytics, and business solutions. Proficient in leveraging emerging technologies to drive business growth and optimize performance. Exceptional written and verbal communication skills facilitating effective collaboration with clients and cross-functional teams. Seeking a tech-centric role to contribute expertise to cutting-edge projects and drive digital transformation.',
		education: [
			{
				institution: 'The University of Texas at Austin',
				school: 'McCombs School of Business',
				degree: 'Bachelor of Business Administration',
				major: 'Management Information Systems',
				startDate: '',
				endDate: 'December 2022',
				gpa: '3.74',
			},
		],
		experience: [
			{
				company: 'Neutrino Web Development',
				title: 'Freelancer/Founder',
				location: 'Austin, TX',
				startDate: 'June 2017',
				endDate: 'December 2022',
				description: [
					{
						bullet:
							'Collaborated with clients and other agencies to identify business requirements and deliver tailored web-based solutions',
					},
					{
						bullet: 'Utilized data analytics to optimize web performance and user engagement',
					},
					{
						bullet:
							'Implemented front-end technologies (HTML5, CSS3, JavaScript, React) to deliver interactive user experiences',
					},
					{
						bullet:
							'Drove revenue growth through proactive sales strategies, acquiring and managing a strong client base',
					},
				],
			},
			{
				company: 'Markel Corporation',
				title: 'Surety Underwriting Intern',
				location: 'Austin, TX',
				startDate: 'June 2022',
				endDate: 'August 2022',
				description: [
					{
						bullet:
							'Developed a solid foundation in a large corporate setting, gaining valuable experience within a Fortune 500 company',
					},
					{
						bullet:
							'Presented research findings to C-suite executives, providing data-driven insights into industry trends and implications',
					},
					{
						bullet:
							'Collaborated with DevOps team to assess the implementation of emerging technologies in the surety business',
					},
					{
						bullet:
							'Analyzed various financial statements and supported underwriters in risk analysis through financial modeling techniques',
					},
				],
			},
			{
				company: 'Frontier Extraction Services',
				title: 'Founding Partner',
				location: 'Lincoln, NE',
				startDate: 'January 2020',
				endDate: 'January 2022',
				description: [
					{
						bullet:
							'Gained valuable entrepreneurial experience through the establishment of a hemp processing and brokering venture',
					},
					{
						bullet:
							'Ensured compliance with licensing and regulatory requirements by liaising with local authorities',
					},
					{
						bullet:
							'Managed and implemented IT infrastructure, ensuring seamless business operations and data integrity',
					},
				],
			},
		],
		projects: [
			{
				name: 'Conflict Management System',
				client: 'Slayden Grubert Beard PLLC',
				startDate: '',
				endDate: 'Fall 2022',
				description: [
					{
						bullet:
							'Developed a tailored application in collaboration with a local law firm to monitor potential conflicts of interest',
					},
					{
						bullet:
							'Played an active role in the software development life cycle, gathering and analyzing business requirements',
					},
					{
						bullet:
							'Served as a dedicated developer within an Agile team, emphasizing effective communication and iterative development',
					},
					{
						bullet:
							'Integrated third-party APIs to automate processes and seamlessly connect the custom application with existing systems',
					},
				],
			},
			{
				name: 'Book Store System Project',
				client: 'MIS 333K: Web Application Development',
				startDate: '',
				endDate: 'Spring 2022',
				description: [
					{
						bullet:
							'Developed a full stack ASP.NET pseudo ecommerce site hosted on Microsoft Azure',
					},
					{
						bullet:
							'Created a robust relational database schema, optimizing table relationships for efficient data management',
					},
					{
						bullet:
							'Implemented various LINQ queries to facilitate seamless interaction with the cloud-hosted SQL relational database',
					},
					{
						bullet:
							'Utilized Git version control for effective coordination of changes and feature implementations within the development team',
					},
				],
			},
		],
		awards: [
			{
				name: '4 Semesters University Honors (Dean’s List)',
				date: 'Fall 2022',
			},
			{
				name: 'Best in Conroe: Web Design',
				date: 'Fall 2018',
			},
		],
		additionalInfo: [
			{
				name: 'Skills',
				description:
					'SQL, Python, JavaScript, HTML, CSS, Docker, Unifi, Agile Methodology, Prompt Engineering, Customer Success, MS Office',
			},
			{
				name: 'Certifications',
				description: 'In Progress - Azure Fundamentals AZ-900',
			},
			{
				name: 'Interests',
				description:
					'Weightlifting, Sim Racing, Overlanding, Skiing, NCAA Football, Homelabbing, Networking',
			},
			{
				name: 'Work Eligibility',
				description: 'Eligible to work in the U.S. with no restrictions; Open to relocation',
			},
		],
	});

	return (
		<div className="flex h-screen bg-gray-100">
			<main className="no-scrollbar flex h-fit w-full flex-col lg:h-full lg:flex-row">
				<Editor resumeData={resumeData} setResumeData={setResumeData} />
				<Previewer resumeData={resumeData} />
			</main>
		</div>
	);
}

export default App;
