import { useState, useEffect } from 'react';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
	const defaultResumeData = {
		firstName: 'Joseph',
		lastName: 'Risk',
		email: 'j0srisk@utexas.edu',
		phone: '(936) 647-8636',
		social: 'LinkedIn.com/in/JosephRisk',
		summary:
			'Results-driven graduate with a strong academic background in software development, data analytics, and business solutions. Proficient in leveraging emerging technologies to drive business growth and optimize performance. Exceptional written and verbal communication skills facilitating effective collaboration with clients and cross-functional teams. Seeking a tech-centric role to contribute expertise to cutting-edge projects and drive digital transformation.',
		education: [
			{
				id: uuidv4(),
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
				id: uuidv4(),
				company: 'Neutrino Web Development',
				title: 'Freelancer/Founder',
				location: 'Austin, TX',
				startDate: 'June 2017',
				endDate: 'December 2022',
				description: [
					{
						id: uuidv4(),
						bullet:
							'Collaborated with clients and other agencies to identify business requirements and deliver tailored web-based solutions',
					},
					{
						id: uuidv4(),
						bullet: 'Utilized data analytics to optimize web performance and user engagement',
					},
					{
						id: uuidv4(),
						bullet:
							'Implemented front-end technologies (HTML5, CSS3, JavaScript, React) to deliver interactive user experiences',
					},
					{
						id: uuidv4(),
						bullet:
							'Drove revenue growth through proactive sales strategies, acquiring and managing a strong client base',
					},
				],
			},
			{
				id: uuidv4(),
				company: 'Markel Corporation',
				title: 'Surety Underwriting Intern',
				location: 'Austin, TX',
				startDate: 'June 2022',
				endDate: 'August 2022',
				description: [
					{
						id: uuidv4(),
						bullet:
							'Developed a solid foundation in a large corporate setting, gaining valuable experience within a Fortune 500 company',
					},
					{
						id: uuidv4(),
						bullet:
							'Presented research findings to C-suite executives, providing data-driven insights into industry trends and implications',
					},
					{
						id: uuidv4(),
						bullet:
							'Collaborated with DevOps team to assess the implementation of emerging technologies in the surety business',
					},
					{
						id: uuidv4(),
						bullet:
							'Analyzed various financial statements and supported underwriters in risk analysis through financial modeling techniques',
					},
				],
			},
			{
				id: uuidv4(),
				company: 'Frontier Extraction Services',
				title: 'Founding Partner',
				location: 'Lincoln, NE',
				startDate: 'January 2020',
				endDate: 'January 2022',
				description: [
					{
						id: uuidv4(),
						bullet:
							'Gained valuable entrepreneurial experience through the establishment of a hemp processing and brokering venture',
					},
					{
						id: uuidv4(),
						bullet:
							'Ensured compliance with licensing and regulatory requirements by liaising with local authorities',
					},
					{
						id: uuidv4(),
						bullet:
							'Managed and implemented IT infrastructure, ensuring seamless business operations and data integrity',
					},
				],
			},
		],
		projects: [
			{
				id: uuidv4(),
				name: 'Conflict Management System',
				client: 'Slayden Grubert Beard PLLC',
				startDate: '',
				endDate: 'Fall 2022',
				description: [
					{
						id: uuidv4(),
						bullet:
							'Developed a tailored application in collaboration with a local law firm to monitor potential conflicts of interest',
					},
					{
						id: uuidv4(),
						bullet:
							'Played an active role in the software development life cycle, gathering and analyzing business requirements',
					},
					{
						id: uuidv4(),
						bullet:
							'Served as a dedicated developer within an Agile team, emphasizing effective communication and iterative development',
					},
					{
						id: uuidv4(),
						bullet:
							'Integrated third-party APIs to automate processes and seamlessly connect the custom application with existing systems',
					},
				],
			},
			{
				id: uuidv4(),
				name: 'Book Store System Project',
				client: 'MIS 333K: Web Application Development',
				startDate: '',
				endDate: 'Spring 2022',
				description: [
					{
						id: uuidv4(),
						bullet:
							'Developed a full stack ASP.NET pseudo ecommerce site hosted on Microsoft Azure',
					},
					{
						id: uuidv4(),
						bullet:
							'Created a robust relational database schema, optimizing table relationships for efficient data management',
					},
					{
						id: uuidv4(),
						bullet:
							'Implemented various LINQ queries to facilitate seamless interaction with the cloud-hosted SQL relational database',
					},
					{
						id: uuidv4(),
						bullet:
							'Utilized Git version control for effective coordination of changes and feature implementations within the development team',
					},
				],
			},
		],
		awards: [
			{
				id: uuidv4(),
				name: '4 Semesters University Honors (Dean’s List)',
				date: 'Fall 2022',
			},
			{
				id: uuidv4(),
				name: 'Best in Conroe: Web Design',
				date: 'Fall 2018',
			},
		],
		additionalInfo: [
			{
				id: uuidv4(),
				name: 'Skills',
				description:
					'SQL, Python, JavaScript, HTML, CSS, Docker, Unifi, Agile Methodology, Prompt Engineering, Customer Success, MS Office',
			},
			{
				id: uuidv4(),
				name: 'Certifications',
				description: 'In Progress - Azure Fundamentals AZ-900',
			},
			{
				id: uuidv4(),
				name: 'Interests',
				description:
					'Weightlifting, Sim Racing, Overlanding, Skiing, NCAA Football, Homelabbing, Networking',
			},
			{
				id: uuidv4(),
				name: 'Work Eligibility',
				description: 'Eligible to work in the U.S. with no restrictions; Open to relocation',
			},
		],
	};

	const [resumeData, setResumeData] = useState(() => {
		const savedData = localStorage.getItem('resumeData');
		return savedData ? JSON.parse(savedData) : defaultResumeData;
	});

	// Save the resumeData to local storage whenever it changes
	useEffect(() => {
		localStorage.setItem('resumeData', JSON.stringify(resumeData));
	}, [resumeData]);

	return (
		<div className="flex h-screen">
			<main className="no-scrollbar flex h-fit w-full flex-col lg:h-full lg:flex-row">
				<Editor
					resumeData={resumeData}
					setResumeData={setResumeData}
					defaultResumeData={defaultResumeData}
				/>
				<Previewer resumeData={resumeData} />
			</main>
		</div>
	);
};

export default App;
