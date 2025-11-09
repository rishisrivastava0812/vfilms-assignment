
import Container from './UI/Container.jsx';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
         
          <div className="relative order-2 lg:order-1 flex justify-center items-center">
            <div className="relative" style={{ width: '565px', height: '565px' }}>
            
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/mandala.png" 
                  alt="" 
                  className="w-full h-full object-contain"
                  style={{ 
                    width: '465px', 
                    height: '465px'
                  }}
                />
              </div>
              
             
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/vfilms-logo.png" 
                  alt="V Films" 
                  className="w-auto h-auto object-contain"
                  style={{ maxWidth: '300px', maxHeight: '150px' }}
                />
              </div>
            </div>
          </div>

        
          <div className="space-y-6 order-1 lg:order-2">
           
            <p
              className="text-center lg:text-left leading-none"
              style={{ 
                fontFamily: "'Island Moments', cursive",
                fontSize: '70px',
                fontWeight: 200,
                color: '#1C3D5A',
                lineHeight: '100%',
                letterSpacing: '0%'
              }}
            >
              Varnan is where stories find 
              <p className='text-center'>their voice and form</p>
            </p>
            
         
            <div 
              className="flex items-center justify-center lg:justify-start gap-2 text-[1.1rem] font-serif" 
              style={{ color: '#F26938' }}
            >
              <span>Films</span>
              <span className="text-xl mx-1">.</span>
              <span>Brands</span>
              <span className="text-xl mx-1">.</span>
              <span>Art</span>
            </div>

           
            <p 
              className="text-center lg:text-left text-[0.95rem] leading-relaxed max-w-lg font-sans" 
              style={{ color: '#1C2635' }}
            >
              Since 2009, V've been telling stories – stories of people, their journeys, and the places that shape them. Some begin in polished boardrooms, others in humble village squares. But every story starts the same way – by listening with intention. V believes it takes trust, patience, and an eye for the unseen to capture what truly matters. V doesn't just tell stories – V honors them.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}