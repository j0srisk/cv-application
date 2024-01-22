import { useState, useEffect } from 'react';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
	const defaultResumeData = {
		sectionTitles: [
			{
				id: uuidv4(),
				role: 'Role',
				details: 'Details',
				summary: 'Summary',
				experience: 'Experience',
				education: 'Education',
				projects: 'Projects',
				awards: 'Awards',
				additionalInfo: 'Additional Info',
			},
		],
		role: [
			{
				id: uuidv4(),
				title: '',
				company: '',
				description: ``,
			},
		],
		details: [
			{
				id: uuidv4(),
				firstName: 'Joseph',
				lastName: 'Risk',
				description: [
					{
						id: uuidv4(),
						bullet: 'j0srisk@utexas.edu',
					},
					{
						id: uuidv4(),
						bullet: 'josephrisk.com',
					},
				],
			},
		],
		summary: [
			{
				id: uuidv4(),
				description: '',
			},
		],
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
				title: 'Freelance Web Developer',
				location: 'Austin, TX',
				startDate: 'June 2017',
				endDate: 'December 2022',
				description: [
					{
						id: uuidv4(),
						bullet:
							'Collaborated with individual clients and agencies to identify business requirements and deliver web-based solutions',
					},
					{
						id: uuidv4(),
						bullet:
							'Helped drive one e-commerce site to over 10,000 monthly visitors through analytics-driven enhancements',
					},
					{
						id: uuidv4(),
						bullet:
							'Showcased expertise in front-end technologies such as CSS and React, developing dynamic and interactive user interfaces',
					},
				],
			},
			{
				id: uuidv4(),
				company: 'Markel Corporation',
				title: 'Underwriting Intern',
				location: 'Austin, TX',
				startDate: 'June 2022',
				endDate: 'August 2022',
				description: [
					{
						id: uuidv4(),
						bullet:
							'Gained foundational experience in a Fortune 500 setting, fostering adaptability and corporate understanding',
					},
					{
						id: uuidv4(),
						bullet:
							'Delivered research insights to C-suite executives, offering data-driven perspectives on industry trends',
					},
					{
						id: uuidv4(),
						bullet:
							'Collaborated with DevOps team to assess the implementation of emerging technologies in the surety business',
					},
					{
						id: uuidv4(),
						bullet:
							'Applied financial modeling for risk analysis, demonstrating quantitative skills',
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
							'Established and led a family-involved agricultural venture, gaining entrepreneurial experience in processing and brokering',
					},
					{
						id: uuidv4(),
						bullet:
							'Managed and implemented entire IT infrastructure, ensuring seamless business operations and data integrity',
					},
				],
			},
		],
		projects: [
			{
				id: uuidv4(),
				name: 'Dossi AI',
				client: 'Personal AI Project',
				startDate: '',
				endDate: 'Fall 2023',
				description: [
					{
						id: uuidv4(),
						bullet:
							'Developed custom full-stack Next.js retrieval-augmented generation tool for chatting with personal PDF documents',
					},
					{
						id: uuidv4(),
						bullet:
							'Designed a singular relational database schema to store account data, file metadata, and document embeddings',
					},
					{
						id: uuidv4(),
						bullet:
							'Integrated and deployed locally hosted large language models, ensuring offline functionality and enhanced data privacy',
					},
					{
						id: uuidv4(),
						bullet:
							'Created a Node.js based API for streamlined backend operations, featuring authentication, chat generation, document processing, and S3 bucket storage capabilities',
					},
				],
			},
			{
				id: uuidv4(),
				name: 'Overseerr',
				client: 'Open Source Contributor',
				startDate: '',
				endDate: 'Fall 2023',
				description: [
					{
						id: uuidv4(),
						bullet:
							'Addressed and resolved bugs in a widely used Next.js application with over 40 million downloads',
					},
					{
						id: uuidv4(),
						bullet:
							'Acquired hands-on experience in a large-scale production codebase and monorepo environment',
					},
					{
						id: uuidv4(),
						bullet:
							'Successfully navigated thorough code reviews and continuous integration continuous delivery checks, demonstrating proficiency in collaborative and quality-assured development practices',
					},
				],
			},
			{
				id: uuidv4(),
				name: 'Conflict Management System',
				client: 'MIS 374: Business Systems Development',
				startDate: '',
				endDate: 'Fall 2022',
				description: [
					{
						id: uuidv4(),
						bullet:
							'Partnered with a local patent law firm to create a full-stack application for monitoring potential conflicts of interest',
					},
					{
						id: uuidv4(),
						bullet:
							'Managed the entire software development lifecycle, from gathering business requirements to implementation',
					},
					{
						id: uuidv4(),
						bullet:
							'Served as a dedicated developer within an Agile team, completing tickets and sprints as delegated by project manager',
					},
					{
						id: uuidv4(),
						bullet:
							'Successfully deployed the application within the projected timeframe and provided training to over a dozen employees, ensuring seamless adoption of the software',
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
					'SQL, Python, React, JavaScript, TypeScript, HTML, CSS, Docker, Agile Methodology, Prompt Engineering, MS Office',
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
					'Weightlifting, Sim Racing, Overlanding, Skiing, College Football, Homelabbing',
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
			<main className=" no-scrollbar::-webkit-scrollbar no-scrollbar flex h-fit w-full flex-col lg:h-full lg:flex-row">
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
