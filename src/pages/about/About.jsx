import React from 'react'
import Caption from '../../components/about/Caption'
import AboutSection from '../../components/about/AboutSection'
import Team from '../../components/about/Team'
import Partners from '../../components/about/Partners'

const teamMembers = [
  { name: 'Giulio A. Stefanini', role: 'Co-Founder', imgSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png' },
  { name: 'Matteo Lolli', role: 'Co-Founder', imgSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png' },
  { name: 'Davide Taruscio', role: 'Amministrativo', imgSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png' },
  { name: 'Angelo Sposato', role: 'Back-Office', imgSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png' },
  { name: 'Davide Dalbagno', role: 'Agente', imgSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png' },
  { name: 'Manuel Bellucci', role: 'Developer', imgSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png' }
]

const partners = [
  { name: 'Simone Barbi', role: 'Fotografo', imgSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png' },
  { name: 'Laura Colella', role: 'Consulente Credipass', imgSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png' },
  { name: 'Chiara Masinara', role: 'Ingegnere e architetto', imgSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png' },
  { name: 'Alex Berselli', role: 'Consulente PMC', imgSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png' }
]

const About = () => {
  return (
    <div className='flex flex-col items-center'>
      <img
        loading='lazy'
        src='/NEGATIVO_VERTICALE_CON_SFONDO.jpg'
        alt='Image'
        className='object-cover center h-96 '
      />
      <Caption
        text='Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.'
        name='Giulio A. Stefanini'
        role='Co-Founder Eden House'
      />
      <ol className='relative border-s-4 border-primary-500 p-4 m-4 max-w-2xl'>
        <AboutSection
          title='La nostra missione'
          text='Perchè siamo qui'
          body='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, hic adipisci debitis minima iste eveniet nobis sed dolor quidem accusamus aspernatur, similique sapiente provident. Dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et distinctio ad quaerat culpa enim temporibus assumenda eligendi accusamus eveniet. Quaerat, perspiciatis iure saepe sapiente beatae architecto quam. Iusto similique at quo? Recusandae nostrum quaerat nam consequatur voluptas, ea facilis error amet animi libero dolor rerum optio ex id, quae pariatur!'
        />
        <AboutSection
          title='La nostra identità'
          text='Cosa ci contraddistingue'
          body='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, hic adipisci debitis minima iste eveniet nobis sed dolor quidem accusamus aspernatur, similique sapiente provident. Dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et distinctio ad quaerat culpa enim temporibus assumenda eligendi accusamus eveniet. Quaerat, perspiciatis iure saepe sapiente beatae architecto quam. Iusto similique at quo? Recusandae nostrum quaerat nam consequatur voluptas, ea facilis error amet animi libero dolor rerum optio ex id, quae pariatur!'
        />
        <Team members={teamMembers} />
        <Partners partners={partners} />
      </ol>
    </div>
  )
}

export default About
