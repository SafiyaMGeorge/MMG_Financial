import businessImg from '../assets/Media/Goals.svg';
import businessImg2 from '../assets/Media/Confidence.svg';
import businessImg3 from '../assets/Media/Stress.svg';
import businessImg4 from '../assets/Media/peace.svg';
import businessImg5 from '../assets/Media/Opportunity.svg'

const productData = [
        {   
            id: 1,
            name: "Achievieing financial goals",
            description: "Financial goals provide a clear roadmap for how to manage your money.Small wins build momentum, leading to bigger accomplishments like financial independence.",
            image: businessImg,
        },
        {
            id: 2,
            name: "Gain financial confidence",
            description: "Financial confidence reduces fear and emotional decision-making, empowering you to take calculated risks.",
            image: businessImg2,
        },
        {
            id: 3,
            name: "Reduce Stress Levels",
            description: "A well-prepared financial plan can eliminate the worry of living paycheck to paycheck, offering a sense of security.",
            image: businessImg3,
            link : "/investments"
        },
        {
            id: 4,
            name: "Financial Peace of Mind",
            image: businessImg4,
            description: "With financial peace of mind, you can focus on other aspects of life, without worrying about money."
        },
          {
            id: 5,
            name: "Ability to Seize Investment Opportunities",
            description: "Financial planning allows you to allocate funds specifically for investments, ensuring you can take action when the right chance arises.",
            image: businessImg5,
        }

    ];

export default productData;