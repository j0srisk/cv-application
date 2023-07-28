import { useState, useEffect } from 'react';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
	const defaultResumeData = {
		sectionTitles: [
			{
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
				title: 'Staff Software Engineer',
				company: 'Google',
				description: `Minimum qualifications: • Bachelor's degree in Computer Science, similar technical field of study or equivalent practical experience. • Experience with coding in data structures, algorithms and software design. • Experience in Software Development and coding in a general-purpose programming language (Java, C/C++, C#, Objective C, Python, JavaScript, and Go). Preferred qualifications: • Experience as technical leader in the design and development of large software systems in a structured engineering environment. • Experience delivering complex, large scale and critical products with business impact. • Experience using cloud platforms and/or containerized application deployments. • Excellent technical leadership, project management, analytical problem solving, and troubleshooting skills. • Technically skilled in the engineering disciplines and interested in the field. About the job • Google's Software Engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. As a Staff Software Engineer, you will bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design, networking and data storage, security, artificial intelligence, language processing, UI design and mobile, and more.You will be an execution-focused technical leader helping shape the future of cloud computing. When working on Google Cloud, you will be building innovative cloud technology that is already powering a number of the biggest, innovative companies, customers of Google Cloud worldwide. • Google is an engineering company at heart. We hire people with a broad set of technical skills who are ready to take on some of technology's greatest challenges and make an impact on users around the world. At Google, engineers not only revolutionize search, they routinely work on scalability and storage solutions, large-scale applications and entirely new platforms for developers around the world. From Google Ads to Chrome, Android to YouTube, social to local, Google engineers are changing the world one technological achievement after another. Responsibilities • Devise innovative ideas for solving Google Cloud customer problems and translate these ideas into technical designs. • Apply the best industry standards for code health, scalability and robustness, and mentoring Software Engineers. • Lead designs for major software components, systems, and features. Design, develop, test, deploy, maintain, and improve software. • Help build a team and cultivate innovation. Drive cross-collaboration and execution of projects across multiple teams. • Develop tools, frameworks, and release processes that empower Control Developers to efficiently migrate the current control plane into a more reliable framework.`,
				apiKey: import.meta.env.VITE_OPENAI_API_KEY,
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
						bullet: '(936) 647-8636',
					},
					{
						id: uuidv4(),
						bullet: 'LinkedIn.com/in/JosephRisk',
					},
				],
			},
		],
		summary: [
			{
				id: uuidv4(),
				description:
					'Results-driven graduate with a strong academic background in software development, data analytics, and business solutions. Proficient in leveraging emerging technologies to drive business growth and optimize performance. Exceptional written and verbal communication skills facilitating effective collaboration with clients and cross-functional teams. Seeking a tech-centric role to contribute expertise to cutting-edge projects and drive digital transformation.',
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
