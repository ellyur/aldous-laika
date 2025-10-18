import { motion } from 'framer-motion';

const EntourageSection = () => {
  return (
    <motion.section 
      id="entourage" 
      className="py-12 px-4 relative overflow-hidden"
      style={{ backgroundColor: 'hsl(130, 20%, 96%)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 8.5 }}
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-display italic text-primary mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.5 }}
          data-testid="heading-entourage"
        >
          Entourage
        </motion.h2>

        <motion.div 
          className="space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.8 }}
        >
          {/* Officiating Priest */}
          <div data-testid="section-officiant">
            <h3 className="font-display italic text-lg text-primary mb-2">Officiating Priest</h3>
            <p className="text-primary/80 font-normal italic text-xs">Father Mhar Balili</p>
          </div>

          {/* Groom & Bride - MEN LEFT, WOMEN RIGHT */}
          <div className="grid grid-cols-2 gap-8">
            <div data-testid="section-groom">
              <h3 className="font-display italic text-sm text-primary mb-2">Groom</h3>
              <p className="text-primary/80 font-normal italic text-xs">Aldous Jerome Nacua</p>
            </div>
            <div data-testid="section-bride">
              <h3 className="font-display italic text-sm text-primary mb-2">Bride</h3>
              <p className="text-primary/80 font-normal italic text-xs">Laika Mae Cansancio</p>
            </div>
          </div>

          {/* Principal Sponsors - MEN LEFT, WOMEN RIGHT */}
          <div>
            <h3 className="font-display italic text-lg text-primary mb-4" data-testid="heading-principal-sponsors">Principal Sponsors</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-0.5">
              <p className="text-primary/80 font-normal italic text-xs">Alan Abuton</p>
              <p className="text-primary/80 font-normal italic text-xs">Rachel Abuton</p>
              <p className="text-primary/80 font-normal italic text-xs">Arnel Barete</p>
              <p className="text-primary/80 font-normal italic text-xs">Brenda Barete</p>
              <p className="text-primary/80 font-normal italic text-xs">Eden Ike Pardillada</p>
              <p className="text-primary/80 font-normal italic text-xs">Juvy Pardillada</p>
              <p className="text-primary/80 font-normal italic text-xs">Anthony Batiquin</p>
              <p className="text-primary/80 font-normal italic text-xs">Kareen Batiquin</p>
              <p className="text-primary/80 font-normal italic text-xs">Anecito Akuino</p>
              <p className="text-primary/80 font-normal italic text-xs">Lebie Jade Alkuino</p>
              <p className="text-primary/80 font-normal italic text-xs">Salvador Niño Codoy</p>
              <p className="text-primary/80 font-normal italic text-xs">Julieta Codoy</p>
              <p className="text-primary/80 font-normal italic text-xs">Welber Turno</p>
              <p className="text-primary/80 font-normal italic text-xs">Richel Turno</p>
              <p className="text-primary/80 font-normal italic text-xs">Tiborcio Borja</p>
              <p className="text-primary/80 font-normal italic text-xs">Susan Borja</p>
              <p className="text-primary/80 font-normal italic text-xs">Bernie Rallos</p>
              <p className="text-primary/80 font-normal italic text-xs">Maria Gina Rallos</p>
              <p className="text-primary/80 font-normal italic text-xs">Rey Pelayo</p>
              <p className="text-primary/80 font-normal italic text-xs">Leoncia Pelayo</p>
              <p className="text-primary/80 font-normal italic text-xs">Edward Martin</p>
              <p className="text-primary/80 font-normal italic text-xs">Ma. Teresa Martin</p>
              <p className="text-primary/80 font-normal italic text-xs">Captain Gremar Barete</p>
              <p className="text-primary/80 font-normal italic text-xs">Jean Barete</p>
              <p className="text-primary/80 font-normal italic text-xs">Dr. Cristopher Codoy</p>
              <p className="text-primary/80 font-normal italic text-xs">Meiji Tan</p>
              <p className="text-primary/80 font-normal italic text-xs">Marcelo Cabonita</p>
              <p className="text-primary/80 font-normal italic text-xs">Emly Cabonita</p>
            </div>
          </div>

          {/* Best Man & Maid of Honor - MEN LEFT, WOMEN RIGHT */}
          <div className="grid grid-cols-2 gap-8">
            <div data-testid="section-best-man">
              <h4 className="font-display italic text-sm text-primary mb-2">Best Man</h4>
              <p className="text-primary/80 font-normal italic text-xs">Albert Lamonte</p>
            </div>
            <div data-testid="section-maid-honor">
              <h4 className="font-display italic text-sm text-primary mb-2">Maid of Honor</h4>
              <p className="text-primary/80 font-normal italic text-xs">Lelac Lamonte</p>
            </div>
          </div>

          {/* Groomsmen & Bridesmaids - MEN LEFT, WOMEN RIGHT */}
          <div className="grid grid-cols-2 gap-8">
            <div data-testid="section-groomsmen">
              <h4 className="font-display italic text-sm text-primary mb-2">Groomsmen</h4>
              <p className="text-primary/80 font-normal italic text-xs">Kinth Dictado</p>
              <p className="text-primary/80 font-normal italic text-xs">Jhonrey Jotojot</p>
              <p className="text-primary/80 font-normal italic text-xs">Glenn Ford Pacaldo</p>
              <p className="text-primary/80 font-normal italic text-xs">Patrick Anthony Pañares</p>
            </div>
            <div data-testid="section-bridesmaids">
              <h4 className="font-display italic text-sm text-primary mb-2">Bridesmaids</h4>
              <p className="text-primary/80 font-normal italic text-xs">Lora Mae Dictado</p>
              <p className="text-primary/80 font-normal italic text-xs">Stella Mae Jotojot</p>
              <p className="text-primary/80 font-normal italic text-xs">Katrina Mirambel</p>
              <p className="text-primary/80 font-normal italic text-xs">Catherine Cabonita</p>
            </div>
          </div>

          {/* Junior Groomsmen & Bridesmaids - MEN LEFT, WOMEN RIGHT */}
          <div className="grid grid-cols-2 gap-8">
            <div data-testid="section-junior-groomsmen">
              <h4 className="font-display italic text-sm text-primary mb-2">Junior Groomsmen</h4>
              <p className="text-primary/80 font-normal italic text-xs">Aiziah Zach Nacua</p>
              <p className="text-primary/80 font-normal italic text-xs">Albert Gabrielle Lamonte</p>
              <p className="text-primary/80 font-normal italic text-xs">Aloheim Niño Gabriel Lamonte</p>
            </div>
            <div data-testid="section-junior-bridesmaids">
              <h4 className="font-display italic text-sm text-primary mb-2">Junior Bridesmaids</h4>
              <p className="text-primary/80 font-normal italic text-xs">Aizen Skylar Nacua</p>
              <p className="text-primary/80 font-normal italic text-xs">Jemimah Nacua</p>
              <p className="text-primary/80 font-normal italic text-xs">Ashley Gail Divine Borja</p>
              <p className="text-primary/80 font-normal italic text-xs">Trisha Driane Cansancio</p>
            </div>
          </div>

          {/* Secondary Sponsors - 3 COLUMNS */}
          <div>
            <h3 className="font-display italic text-lg text-primary mb-4" data-testid="heading-secondary-sponsors">Secondary Sponsors</h3>
            <div className="grid grid-cols-3 gap-6">
              <div data-testid="section-candle">
                <h4 className="font-normal italic text-xs text-primary mb-1">Candle</h4>
                <p className="text-primary/80 font-normal italic text-xs">Rengelle Delos Reyes</p>
                <p className="text-primary/80 font-normal italic text-xs">Dave Joseph Delos Reyes</p>
              </div>
              <div data-testid="section-cord">
                <h4 className="font-normal italic text-xs text-primary mb-1">Cord</h4>
                <p className="text-primary/80 font-normal italic text-xs">Reich Nicole Nacua</p>
                <p className="text-primary/80 font-normal italic text-xs">Jay Rick Nacua</p>
              </div>
              <div data-testid="section-veil">
                <h4 className="font-normal italic text-xs text-primary mb-1">Veil</h4>
                <p className="text-primary/80 font-normal italic text-xs">Rojie Daryll Cansancio</p>
                <p className="text-primary/80 font-normal italic text-xs">Teresita Cansancio</p>
              </div>
            </div>
          </div>

          {/* Flower Girls */}
          <div data-testid="section-flower-girls">
            <h4 className="font-display italic text-sm text-primary mb-2">Flower Girls</h4>
            <div className="grid grid-cols-3 gap-x-8">
              <p className="text-primary/80 font-normal italic text-xs">Gemcy Faith Revil</p>
              <p className="text-primary/80 font-normal italic text-xs">Sophia Grace Revil</p>
              <p className="text-primary/80 font-normal italic text-xs">Ziamarah Grace Nacua</p>
            </div>
          </div>

          {/* Bearers - 3 COLUMNS */}
          <div className="grid grid-cols-3 gap-6">
            <div data-testid="section-ring-bearer">
              <h4 className="font-normal italic text-xs text-primary mb-1">Ring Bearer</h4>
              <p className="text-primary/80 font-normal italic text-xs">Aizee Cloude Nacua</p>
            </div>
            <div data-testid="section-coin-bearer">
              <h4 className="font-normal italic text-xs text-primary mb-1">Coin Bearer</h4>
              <p className="text-primary/80 font-normal italic text-xs">Liam Drake Nacua</p>
            </div>
            <div data-testid="section-bible-bearer">
              <h4 className="font-normal italic text-xs text-primary mb-1">Bible Bearer</h4>
              <p className="text-primary/80 font-normal italic text-xs">Davion Raffiel Delos Reyes</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;
