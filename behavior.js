

var dataset = [
	["Blackletter",1150,"classification","Blackletter refers to the calligraphic script used by scribes throughout Western Europe from approximately 1150 to the 17th century. Derived from Carolingian miniscules, Blackletter is characterized by sharp narrow letters with broken angular lines which make it hard to read. The earliest typefaces used in printing (including those in the Gutenberg Bible) were modeled after handwritten Blackletter script.","Germany"],
	["Fraktur",1150,"typeface","Fraktur became the most common German blackletter typeface by the mid-16th century. It continued to be used in Germany until the 20th century when its use was forbidden by Adolf Hitler. Its name, derived from the words “broken” or “fractured”, implies its form which includes a high degree of “breaking”, i.e. lines that do not necessarily connect with each other, especially in curved letters.","Germany"],
	["Humanist",1400,"classification","Typefaces were created during the 15th century by Venetian printers. These typefaces imitated the formal handwriting found in the humanistic (Renaissance) manuscripts of the time. Humanist typefaces are round (in opposition to Blackletter) and are characterized by short and thick bracketed serifs, a slanted cross stroke on the lowercase ‘e’, ascenders with slanted serifs, and low contrast between horizontals and verticals. They are still widely used today.",],
	["Letterpress",1450,"technology","Johannes Gutenberg’s moveable type printing press (or letterpress) created in Mainz, Germany, combined the grape screw press used in winemaking with the system of moveable type developed by the Chinese. Combining these two technologies and using his goldsmithing skills to develop more durable metal type, automated printing and reduced the price of books, making them more accessible.","Germany"],
	["Jenson",1470,"typeface","Printer Nicolas Jenson a French national working in Venice, created the typeface which bears his name. It was renowned for its evenness and the comfortable fit of its letters as words, as well as the beautiful proportions of the letterforms themselves. It a highly readable typeface appropriate for large amounts of text. A model for good typeface design, it has inspired many revivals.","Italy"],
	["Oldstyle",1485,"classification","Oldstyle type began with the Italian punchcutter Francesco Griffo. Old style letters are characterized by the diagonal stress of handwriting in round letters and have sloped, bracketed or tapered serifs. Oldstyle capitals were influenced by carved roman capitals (majuscules); lowercase oldstyle letters were inspired by fifteenth century humanistic writing (minuscules).","Italy"],
	["Bembo",1496,"typeface","Commissioned by Aldus Manutias for the Aldine Press and designed by Francesco Griffo, Bembo is named after the writer Pietro Bembo. Bembo has a more consistent and quieter weight stress and variation than its precedents. Making the uppercase letters shorter than the ascenders in the lower case creates a more even texture on the page. Its serene quality makes Bembo an excellent book face.","Italy"],
	["Italic",1500,"classification","The first italic typeface was produced by Aldus Manutias. Its purpose was to save space in compact “pocket” books by condensing the width of the letters. Based on humanist cursive script, italics retained the slant of handwriting. Unlike the italic type used today however, early italics had only a modest slope and all capital letters were upright roman letters with no slant.","Italy"],
	["Aldine",1501,"typeface","The typecutter Francesco Griffo created the typeface Aldine for Aldus Manutias’ 1501 pocketbook edition of the poetry of the Roman poet Virgil. Aldine italic was very popular in its own day and became the model for other italic types. It was widely (and poorly) imitated.","Italy"],
	["Script",1525,"classification","Script fonts imitate the cursive handwriting of early humanists who used a broad nib pen. Characteristics include a diagonal stress in round letters (borrowed from the slant of handwriting). Scripts are different from italics in that the strokes of letters actually connect with one another at the base. Though not appropriate in lengthy text settings, script is still widely used in shorter applications such as invitations.",],
	["Civilite",1557,"typeface","The Frenchman Robert Granjon designed the first script typeface, known as civilité-letter, in 1557. It was originally used in contracts and includes theatrical flourishes at the end of lines. These gestural strokes resemble the lines written on bank checks to ensure that no additional terms could be added. Civilité was also used for devotionals or proclamations.","France"],
	["Modern",1700,"classification","Modern typestyles evolved from Transitional styles. Modern type is based on a machine aesthetic as opposed to handwriting. It is characterized by a strong geometric quality (evident in the vertical weight of rounded characters) and extreme contrast between thick and thin strokes. Also typical are horizontal hairline serifs that join the stems at a right angle without bracketing.",],
	["Transitional",1730,"classification","Type created in the middle of the eighteenth century when typestyles evolved from Old Style to Modern is known as Transitional. It is charcterized by greater contrast between thick and thin strokes, more horizontal serifs in the lowercase, and less diagonal stress within rounded forms. Transitional forms are also ususally wider than old style characters.","England"],
	["Baskerville",1757,"typeface","John Baskerville explored ways of improving the printing press to make it capable of more subtle impressions with greater precision. His sense of perfection and attention to details contributed greatly to the design of a detailed typeface influenced by the copperplate engraving of the period. Baskerville is characterized by open letterforms that give the page a light grey appearance. The most distinct letter in the face is the capital “Q” which has a sweeping tail.","England"],
	["Lithography",1796,"technology","Lithography is a printing process in which an image is drawn (in reverse) into an oily substance on a smoothed stone and then transferred to a piece of paper. Lithography works because of the mutual repulsion of oil and water. It was invented by Alois Senefelder as a cheap method of publishing theatrical works.","France"],
	["Bodoni",1798,"typeface","Considered the first “modern” typeface, Bodoni was designed by the Italian printer Giambattista Bodoni. The typeface has a pronounced verticality and overall geometric construction that is a dramatic departure from its calligraphic influence. Bodoni’s extreme contrast of thick and thin strokes, flat unbracketed serifs, and round dot over the letter “i” are among its identifying charcteristics.","Italy"],
	["Slab Serif",1815,"classification","Slab serifs evolved out of the desire for eye-catching display letters for advertising posters and handbills in the early 19th century. The first slab serifed typeface (Antique) was designed by the Englishman Vincent Figgens. Slab serifs are characterized by bold heavy square-cornered serifs (usually without brackets), minimal stress in rounded letters, and little contrast between thick and thin strokes. Slab serifs became known as Egyptian typefaces after Napoleon’s conquest of Egypt. Although there was no relationship between Egyptian writing systems and slab serif types, their form does mimic the base and capital of Egytian columns.","England"],
	["Sans Serif",1816,"classification","The first sans serif type appeared in 1816 in a specimen book by the English typefounder William Caslon IV. Sans serif type, as the name implies, lacks serifs. Other characteristics shared by most sans serif type include vertical stress and more uniform strokes. Though most sans serif faces include geometric construction, some combine organic and geometric qualities.","England"],
	["Steel Nib Pen",1822,"technology","The pointed steel nib pen, first manufactured by John Mitchell in Birmingham, England retained a sharp point much longer than either reed or quill pens. Its sharp point, rather than broad edge, brought about a shift in the style of letters including greater contrast between thick and thin strokes. English Round Hand and Copperplate scripts were developed with steel nib pens.","England"],
	["Halftone",1850,"technology","The halftone is a reprographic technique that simulates continuous tone imagery through the use of dots, varying either in size, in shape, or in spacing. Developed by William Fox Talbot, the halftone process enabled photographs (with a full tonal range) to be reproduction on the same page with typographic elements.","England"],
	["Typewriter",1868,"technology","This was one of the first machines to offer an alternative to handwriting, transcribe letters onto paper one after another as in writing. The QWERTY keyboard, designed to slow down the typing process and separate frequently used pairs of letters so that the typebars would not get tangled together, has been incorporated into later devices such as the Linotype and computer. Typewriters typically had only a handful of typefaces (of fixed-width) and one or two font sizes (pica or elite).","England"],
	["Offset Lithography",1875,"technology","The most common kind of offset lithography is derived from the photo offset process, which involves using light-sensitive chemicals and photographic techniques to transfer type and images from film negatives to printing plates. These flexible plates are wrapped around cylindrical drums and are inked. The inked image is then trasferred (or “offset”) from the plate to a rubber blanket and finally to paper.","England"],
	["Linotype",1884,"technology","Linotype, invented by Ottmar Mergenthaler, automated typesetting by producing an entire line of metal type at once. Metallic letter molds (matrices) were assembled using a typewriter keyboard and filled with molten metal to cast the type. This was a significant improvement over the previous industry standard; manual, letter-by-letter typesetting using a composing stick and drawers of letters.","Germany"],
	["Futura",1927,"typeface","Futura was designed by the German book designer Paul Renner. Its initial design was built on a circle, square, and triangle using a compass and straightedge and became the paradigm of a geometic sans serif. Its final form however, was not geometrically perfect and its strokes were not a uniform width. Its architectural form and function together with its lack of decoration emodied the spirit of the modernist movement.","England"],
	["Memphis",1929,"typeface","The typeface Memphis (named after the capital of ancient Egypt) was originally designed by the German Rudolf Wolf for the Stemple Foundry. The typeface is a variant of the sans serif Futura typeface and shares its geometric form. It is considered a monoweight since its stems and serifs appear to have the same weight. Peculiarities which make the typeface unique include upper and lowercase “O’s” which are perfect circles and a lower case “r” with a circular ear. Memphis is suitable for both display and text applications.","Germany"],
	["Electronic Digital Computer",1940,"technology","The first electronic digital computers were the size of a large room, consuming as much power as several hundred modern personal computers. They were used primarily for military applications.","USA"],
	["Machine Readable",1960,"classification","Machine readable fonts utilize optical character recognition and are designed to be read by machines as well as humans. They are characterized by a simplicity of form and monospacing (fixed widths). Machine readable fonts are mostly used by banks, credit card companies, and other businesses that process large amounts of printed data by machine.",],
	["IBM Selectric Typewriter",1961,"technology","The Selectric was known as the carriageless typewriter.It replaced the traditional typewriter’s moving carriage with a roller that stayed in position while a typeball and ribbon mechanism moved from side to side eliminating the problem of clashing typebars. It also incorporated word processing and an ability to change fonts which became important features in desktop publishing.","USA"],
	["LetraSet",1961,"technology","LetraSet was a kind of do-it-yourself lettering. You could “set” your own type by simply positioning a polyethylene sheet of dry transfer lettering with a low tack adhesive over a piece of paper and rubbing it onto the surface below.","England"],
	["OCR-B",1968,"typeface","OCR-B, designed by the Swiss type designer Adrian Frutiger, is the European counterpart to OCR-A. It is designed to read by both machines and humans and it has a less technical look than OCR-A. Declared a world standard, it is widely used for UPC / EAN barcodes.","Switzerland"],
	["Dot Matrix Printer",1970,"technology","The Dot matrix printer was a low-end printer commonly used with the first personal computers. It included a print head that ran back and forth on the page and printed by impact, striking an ink-soaked cloth ribbon against the paper much like the print mechanism on a typewriter. It was extremely noisy and produced very low res (pixelated) type and images.","USA"],
	["Portable Computer",1975,"technology","The first portable computer was the IBM 5100 (introduced six years before the first IBM PC). It had 64 KB of RAM, was the size of a small suitcase, and weighed about 55 lbs. The unit included a small keyboard and a 5” diagonal CRT display.","USA"],
	["Bitmapped",1980,"classification","Bitmapped fonts were created for the course resolutions of computer screens and dot-matrix printers. Rendered on a matrix or grid of square cells or pixels, each bit that made up an image corresponded to one pixel. The biggest disadvantage of bitmapped fonts was that diagonal elements appear as jagged edges when enlarged. Bitmapped fonts became obsolete with the development of high resolution computer screens and output devices.","USA"],
	["Apple Macintosh Computer",1984,"technology","The Mactintosh was the first commercially successful personal computer with a mouse and a graphical user interface (GUI). It also developed the concept of what you see is what you get (WYSIWYG) printing. The Macintosh put unprecedented power into the hands of the user. It democratized computing and revolutionalized the design and production of type, eliminating specialized typesetting companies.","USA"],
	["PostScript",1984,"technology","PostScript, a page description language which treats type as objects rather than as bit maps, was released by Adobe Systems, Inc. in 1984. Defining lines with Bézier curves allows letters to be scaleable so they can be used at any size without losing sharpness or quality.","USA"],
	["Apple Laser Writer",1985,"technology","Apple’s first laser printer, the LaserWriter, had Adobe’s high quality scalable PostScript-fonts built into its memory. In combination with WYSIWYG publishing software like PageMaker the LaserWriter was a key component in the development of desktop publishing.","USA"],
	["Oakland",1985,"typeface","Oakland, designed by Zuzana Licko, was one of the first fonts designed specifically to embrace the course rendering of fonts on a macintosh computer and dot matrix printer. Using public domain software, Licko created Oakland’s four fixed-size fonts of increasingly refine resolution (Oakland, 6, 8, 10, and 15) which were released in Emigré, a magazine founded by Licko and her husband Rudy Vanderlans. Emigré opened up the market for smaller type foundries and emerged as a showcase for cutting edge type design.","USA"],
	["PageMaker",1985,"technology","PageMaker was one of the first software programs available for use with desktop computers that supported the integration of type and image into page layouts. Its graphical user interface made it easy to use and helped popularize the Apple Macintosh computer and Desktop Publishing.","USA"],
	["Fontographer",1986,"technology","Fontographer was the first commerically available software for editing Bézier curves on a personal computer. Developed for the Mac (before Adobe Illustrator) it allowed high quality fonts (in the PostScript format) to be developed for a fraction of the cost of other existing methods. Fontographer lead to the democratization of type design enabling self-taught type designers to produce fonts for professional use without substantial capital investment.","USA"],
	["Random",1990,"classification","Random fonts challenged the notion of the fixed and non-varying nature of type carried over from print technology which takes one form and copies it over and over again. If we can read the natural variations of handwriting, it reasoned, the sameness of type is not necessary.",],
	["Beowolf",1990,"typeface","Beowolf was designed by Letterror, the Dutch duo of Erik van Blokland and Just van Rossum. It was digitized by hand in Ikarus and then programmed to change at random during printing. It challenged the notion that outline fonts are inherently superior to bitmapped ones and was proof that fonts were no longer physical objects - but rather instructions. The name came from the poem ‘Beowulf’, which resists traditional modes of literary criticism because it cannot be treated as a unique, fixed document.","Netherlands"],
	["Grunge",1990,"classification","Grunge fonts are dirty, abstract, typefaces whose messey and edgy qualities represent the antithesis of the hygenic purity of the machine age. They were typically hand-scrawled scratchy marks that referenced urban graffiti. They represented the new found interest in the vernacular that had arisen alongside — and often in opposition to — the computer in the 1980s.",],
	["Template Gothic",1990,"typeface","Designed by Barry Deck, Template Gothic was inspired by a degraded stenciled sign hung in his neighborhood laundromat. The vernacular source of his typeface referenced a process that is both mechanical and manual letters drawn with a plastic stencil. Template Gothic was ubiquitous by the end of the 1990s, representing the desire during the grunge era to abandon the perfection of modernist letterforms and embrace an imperfect world.","USA"],
	["Mashed",1990,"classification","Adobe’s 1989 decision to end the encryption of its PostScript fonts coupled with the cut and paste features in software programs such as Fontographer, opend the door for hacking type. Mashed typefaces (or mash-ups) are a patchwork of pre-existing fonts cut and pasted from different sources. Experimental in nature, they were often somewhat crudely executed and intentionally unfinished and imperfect.",],
	["Blurred",1990,"classification","Blurred type explored new typographic forms using Adobe Photoshop. Although Photoshop (which was introduced in 1990) was designed for the manipulation and reproduction of photographs, designers soon began to explore its ability to set and edit type.",],
	["Interactive",1990,"classification","Interactive typefaces built on the concept of mashed fonts with one important difference – they invited the users themselves to become involved in making changes to their form. Alterations previously the exclusive domain of the types’ creators were placed in the hands of a wider audience who could make changes at will using computer-based applications.",],
	["Web-Safe",1990,"classification","Web-safe fonts are so called “resident” fonts that come installed on a wide range of computers as part of their operating systems. This guarantees that any content designed using these fonts will be displayed in the same font (on both Macs and PCs) and no substitutions will occurr. Websafe fonts include Andale Mono, Arial, Arial Black, Comic Sans, Courier New, Georgia, Impact, Times New Roman, Trebuchet, Verdana and Wingdings.",],
	["Dead History",1990,"typeface","Designer P. Scott Makela looked to the future, not the past, for inspiration for his typeface Dead History. A manipulation of the vectors of two exiting typefaces Linotype Centennial (a traditional serif) and Adobe’s VAG Rounded (a kind of pop classic), Dead History exemplifies the “sampling” approach to type design that Fontographer made possible. According to him, Dead History “personifies a new attitude in type creation ... the result of the computer’s capabilities to function as the perfect assembling tool.","USA"],
	["Blur",1992,"typeface","British designer Neville Brody’s typeface, Blur, a mutant manipulated type, embraced its own imperfection. Its biomorphic features were created by running Helvetica through Photoshop’s blur filter and then vectorizing the results.","England"],
	["Walker",1995,"typeface","Walker, designed by Matthew Carter, is one of the first interactive and mutable typefaces. It was commissioned as part of the branding system for the Walker Art Center in Minneapolis and is used exclusively by the museum’s in-house designers. A sans-serif typeface with optional snap on/off serifs for certain letters and a flexible underlining system, Walker represents the diversity of the museum’s programming.","USA"],
	["Verdana",1996,"typeface","Matthew Carter’s widely used face is regarded as the ultimate example of readability on the web. Designed specifically to be viewed at small sizes on a computer screen, it is characterized by the square dot over the “i”, lack of serifs, large x-height, wide proportions, loose letter-spacing, large counters, and emphasized distinctions between similarly-shaped characters (such as i, I, and 1) all of which help increase its legibility.","USA"],
	["Cleartype",2000,"technology","Cleartype is a font display technology developed by MicroSoft that improves the readability of text viewed in its windows operating system on LCD screens of all sizes. By breaking down pixels into smaller sub-pixels it renders the jagged edges of diagonals more smoothly.","USA"],
	["Intelligent",2000,"classification","Intelligent typefaces are dynamic in form and responsive to real time input. Intelligent fonts throw most typographical conventions out the window.",],
	["Generative",2000,"technology","Generative typography creates new versions of existing typefaces using a computational algorithmic process to transform existing typefaces into new versions of themselves.",],
	["Processing",2001,"technology","Processing is an Open Source programming language and visualization tool created by Ben Fry and Casey Reas. Its accessibility and ease of use has made it a popular tool for experimenting with the design of new typefaces.","USA"],
	["iPhone",2007,"technology","The iPhone was the first portable multi-use smartphone with audio-visual media capabilties and wi-fi and cellular data connectivity. Its multi-touch screen and virtual keyboard made it very user-friendly.","USA"],
	["Constantia",2007,"typeface","Commissioned by MicroSoft, Canadian designer John Hudson created Constantia specifically for use with both print and electronic media. This flexibility was intended to help develop a consistent brand across media platforms. The typeface is characterized by modulated wedge shaped serifs, a relatively small x-height, and long ascenders and descenders. Its porportions make it a good book face. Other Cleartype fonts include Corbel, Calibri, Consolas,Candara, Cambria, Constantia.","Canada"],
	["iPad",2010,"technology","The iPad is a tablet computer developed by Apple Inc. as a personal platform for audio-visual media including books, periodicals, movies, music, games, apps and web content. Its design, which makes the hands-on experience intuitive and the technology invisible, coupled with its razor sharp type, has greatly accelerated the development of e-books.","USA"],
	["Averia",2011,"typeface","Dan Sayers, a non-designer, created Avería overlapping and computationally averaging the 725 fonts on his computer and morphing them into new shapes. Avería is a Spanish word derived from the root of the word <i>average.</i>","USA"]];

var timeScale = d3.scale.linear().domain([1100,2000]).range([38,989]);
var centuries = [1100,1200,1300,1400,1500,1600,1700,1800,1900,2000,2100]
var yearsScale;
var years = [0,1,2,3,4,5,6,7,8,9,10,11];
/*var years = [1150,1400,1470,1485,1496,1500,1501,1525,1557,1700,1730,1757,1796,1798,1815,1816,1822,1850,1868,1875,1884,1927,1729,1940,1960,1961,1968,1970,1975,1980,1984,1985,1986,1990,1992,1995,1996,2000,2001,2007,2010,2011];*/



function drawMainTitle() {
	d3.select('#svg')
    	.append("text")
        .attr('class','title')
    	.attr('x', 900)
    	.attr('y', 200)
    	.style('fill', 'black')
    	.style('font-family', 'Bebas')
    	.style('font-size','100px')
    	.text("Type + Technology")
		.style('opacity',1)
		.transition()
		.duration(1000)
        .attr('x', 130)
    	.attr('y', 200)
		.style('opacity',1)
        .transition()
		.duration(3000)
        .attr('x', 130)
    	.attr('y', 200)
		.style('opacity',0);
    d3.select('#svg')
    	.append("text")
        .attr('class','title')
    	.attr('x', 900)
    	.attr('y', 310)
    	.style('fill', 'black')
    	.style('font-family', 'Bebas')
    	.style('font-size','100px')
    	.text("Timeline(dots)")
		.style('opacity',1)
		.transition()
		.duration(1000)
        .attr('x', 300)
    	.attr('y', 310)
		.style('opacity',1)
        .transition()
		.duration(3000)
        .attr('x', 300)
    	.attr('y', 310)
        .style('opacity',0) ;
    
    drawTextCircle0();
    drawTimeline();
    drawMainTitle2();
    drawTagCirclesBlue();
    drawTagTextBlue();
    drawTagCirclesYellow();
    drawTagTextYellow();
    drawTagCirclesRed();
    drawTagTextRed();
   
   }

function drawTextCircle0() {
    
    d3.select('#svg')
		.append('circle')
        .attr('cx', 35)
    	.attr('cy', 989)
        .attr('r', 8)
	    .style('fill','#000000')
        .style('opacity',0)
        .transition()
        .duration(3000)
        .attr('cx', 300)
    	.attr('cy', 310)
        .attr('r', 8)
        .style('opacity',.2)
        .transition()
        .duration(3000)
        .attr('cx', 300)
    	.attr('cy', 310)
        .attr('r', 250)
        .style('opacity',.5);
       
}

function drawTextCircle1() {
    
    d3.select('#svg')
		.append('circle')
        .attr('cx', 35)
    	.attr('cy', 989)
        .attr('r', 8)
	    .style('fill','#004358')
        .style('opacity',0)
        .transition()
        .duration(1000)
        .attr('cx', 300)
    	.attr('cy', 310)
        .attr('r', 8)
        .style('opacity',.2)
        .transition()
        .duration(1000)
        .attr('cx', 300)
    	.attr('cy', 310)
        .attr('r', 250)
        .style('opacity',1);
       
}

function drawTextCircle2() {
    
    d3.select('#svg')
		.append('circle')
        .attr('cx', 35)
    	.attr('cy', 989)
        .attr('r', 8)
	    .style('fill','#BEDB39')
        .style('opacity',0)
        .transition()
        .duration(1000)
        .attr('cx', 300)
    	.attr('cy', 310)
        .attr('r', 8)
        .style('opacity',.2)
        .transition()
        .duration(1000)
        .attr('cx', 300)
    	.attr('cy', 310)
        .attr('r', 250)
        .style('opacity',1);
       
}

function drawTextCircle3() {
    
    d3.select('#svg')
		.append('circle')
        .attr('cx', 35)
    	.attr('cy', 989)
        .attr('r', 8)
	    .style('fill','#FF5347')
        .style('opacity',0)
        .transition()
        .duration(1000)
        .attr('cx', 300)
    	.attr('cy', 310)
        .attr('r', 8)
        .style('opacity',.2)
        .transition()
        .duration(1000)
        .attr('cx', 300)
    	.attr('cy', 310)
        .attr('r', 250)
        .style('opacity',1);
       
}


function drawTagCirclesBlue() {
    
    d3.select('#svg')
		.append('circle')
        .attr('cx', 1200)
    	.attr('cy', 120)
        .attr('r', 0)
	    .style('fill','#004358')
        .style('opacity',0)
        .transition()
        .duration(1000)
        .attr('cx', 1100)
    	.attr('cy', 120)
        .attr('r', 5)
	    .style('fill','#004358')
        .style('opacity',.5)
        .transition()
        .duration(1500)
        .attr('cx', 960)
    	.attr('cy', 120)
        .attr('r', 15)
	    .style('fill','#004358')
        .style('opacity',1);
       
}

function drawTagTextBlue() {
	d3.select('#svg')
    	.append("text")
        .attr('class','title0')
    	.attr('x', 1100)
    	.attr('y', 125)
    	.style('fill', '#000000')
    	.style('font-family', 'Avenir Next')
    	.style('font-size','14px')
    	.text("Classification")
		.style('opacity',0)
		.transition()
		.duration(1500)
        .delay(1000)
        .attr('x', 850)
    	.attr('y', 125)
		.style('opacity',1);
}

function drawTagCirclesYellow() {
    
    d3.select('#svg')
		.append('circle')
        .attr('cx', 1200)
    	.attr('cy', 160)
        .attr('r', 0)
	    .style('fill','#BEDB39')
        .style('opacity',0)
        .transition()
        .duration(1000)
        .attr('cx', 1100)
    	.attr('cy', 160)
        .attr('r', 5)
	    .style('fill','#BEDB39')
        .style('opacity',.5)
        .transition()
        .duration(2000)
        .attr('cx', 960)
    	.attr('cy', 160)
        .attr('r', 15)
	    .style('fill','#BEDB39')
        .style('opacity',1);
       
}

function drawTagTextYellow() {
	d3.select('#svg')
    	.append("text")
        .attr('class','title0')
    	.attr('x', 1100)
    	.attr('y', 165)
    	.style('fill', '#000000')
    	.style('font-family', 'Avenir Next')
    	.style('font-size','14px')
    	.text("Typeface")
		.style('opacity',0)
		.transition()
		.duration(1500)
        .delay(2000)
        .attr('x', 850)
    	.attr('y', 165)
		.style('opacity',1);
}

function drawTagCirclesRed() {
    
    d3.select('#svg')
		.append('circle')
        .attr('cx', 1200)
    	.attr('cy', 200)
        .attr('r', 0)
	    .style('fill','#FF5347')
        .style('opacity',0)
        .transition()
        .duration(1000)
        .attr('cx', 1100)
    	.attr('cy', 200)
        .attr('r', 5)
	    .style('fill','#FF5347')
        .style('opacity',.5)
        .transition()
        .duration(3000)
        .attr('cx', 960)
    	.attr('cy', 200)
        .attr('r', 15)
	    .style('fill','#FF5347')
        .style('opacity',1);
       
}

function drawTagTextRed() {
	d3.select('#svg')
    	.append("text")
        .attr('class','title0')
    	.attr('x', 1100)
    	.attr('y', 205)
    	.style('fill', '#000000')
    	.style('font-family', 'Avenir Next')
    	.style('font-size','14px')
    	.text("Technology")
		.style('opacity',0)
		.transition()
		.duration(1500)
        .delay(2500)
        .attr('x', 850)
    	.attr('y', 205)
		.style('opacity',1);
}

function drawMainTitle2() {
	d3.select('#svg')
    	.append("text")
        .attr('class','title0')
    	.attr('x', 900)
    	.attr('y', 60)
    	.style('fill', 'black')
    	.style('font-family', 'Bebas')
    	.style('font-size','25px')
    	.text("Type + Technology")
		.style('opacity',0)
		.transition()
		.duration(1000)
        .delay(3500)
        .attr('x', 780)
    	.attr('y', 60)
		.style('opacity',1);
    d3.select('#svg')
    	.append("text")
        .attr('class','title0')
    	.attr('x', 900)
    	.attr('y', 90)
    	.style('fill', 'black')
    	.style('font-family', 'Bebas')
    	.style('font-size','25px')
    	.text("Timeline")
		.style('opacity',0)
		.transition()
        .delay(3500)
		.duration(1000)
        .attr('x', 890)
    	.attr('y', 90)
		.style('opacity',1);



}


function drawSubCircles() {
	
 		
      d3.select('#svg')
    		.selectAll('subCircles')
			.data(eventArray)
			.enter()
			.append("circle")
 			.attr('cursor','pointer')
   			.attr('class','subCircles')
    		.attr('cx',function(d,i) {
console.log(d[1]);
        return yearsScale(d[1]);
			})
    		.attr('cy',650)
     		.attr('r',5)
        
           .style('fill',function(d,i) {
			if(d[2] == "classification") { return '#004358'; }
			else if(d[2] == "typeface") { return '#BEDB39'; }
			else if(d[2] == "technology") { return '#FF5347'; }
			})
            
         .on('mouseover',function(d,i) {
        
			if(d[2] == "classification") { return drawTextCircle1(); }
			else if(d[2] == "typeface") { return drawTextCircle2(); }
			else if(d[2] == "technology") { return drawTextCircle3(); }
			
      })
          
        .on('click',function(d,i) {
      
 				
          d3.select('#svg')
    			.append("text")
    			.text(function() {
					return d[0];
					})
    			.attr('class','heading')
    			.attr('x',300)
    			.attr('y',195)
    			.style('fill','white')
    			.style('font-family','Bebas')
    			.style('text-anchor','middle')
    			.style('font-size','32px')
                .style('opacity',0)
                .transition()
                .delay(500)
                .duration(1000)
				.style('opacity',1);
          
          d3.select('#svg')
    			.append("text")
    			.text(function() {
					return d[1];
					})
    			.attr('class','heading')
    			  .attr('x',620)
    			.attr('y',430)
    			.style('fill','black')
    			.style('font-family','Bebas')
    			.style('text-anchor','start')
    			.style('font-size','150px')
				.style('opacity',1);
        
			
			d3.select('#svg')
    			.append("text")
    			.text(function() {
					return d[4];
					})
    			.attr('class','heading')
    			.attr('x',300)
    			.attr('y',235)
    			.style('fill','white')
    			.style('font-family','Avenir Next')
    			.style('text-anchor','middle')
    			.style('font-size','21px')
                .style('opacity',0)
                .transition()
                .delay(500)
                .duration(1000)
				.style('opacity',1);

selectedBody = d[3];
        
d3.select('#allText')
			.append("p")
   			.html(selectedBody)
    		.attr('class','heading')
    		.style('color', '#ffffff')
    		.style('font-family', 'Avenir Next')
    		
    		.style('opacity',.5)
    		.style('font-size','12px')
                .style('opacity',0)
                .transition()
                .delay(500)
                .duration(1000)
				.style('opacity',1);


        d3.selectAll('.subCircles').remove();
          
			
				})
		.transition()
		.delay(2000)
		.duration(1000);	
          
		}

var selectedBody;



var eventArray = [];

function drawTimeline() {
     // The code below is for the circles that represent each century
	console.log(dataset.length);
	d3.select('#svg').selectAll('year.text')
		.data(centuries)
		.enter()
    	.append("text")
    	.text(function(d,i) {
			return d;
			})
    	.attr('x',function(d,i) {
			return timeScale(d);
			})
    	.attr('y',750)
    	.style('fill','black')
    	.style('font-family','Avenir Next')
    	.style('text-anchor','middle')
    	.style('font-size','12px')
		.style('opacity',0)
		.transition()
		.delay(2000)
		.duration(1000)
		.style('opacity',0.5);
     
	
      d3.select('#svg').selectAll('year.circles')
		.data(centuries)
		.enter()
		.append('circle')
		.attr('class','yearCircles')
		
	.attr('cx',function(d,i) {
			return timeScale(d);
			})
  	/*.attr('cy',function(d,i) {
			if(d[2] == "classification") { return 660; }
			else if(d[2] == "typeface") { return 720; }
			else if(d[2] == "technology") { return 720; }
			})*/
      .attr('cy', 720)
		.attr('r',8)
      .attr('cursor','pointer')
	    .style('fill','#000')
		.style('opacity',0)
		
          .on('click',function(d,i) {
          
          
			
            eventArray = [];        
  		    yearsScale = d3.scale.linear().domain([d,d+100]).range([24,1019]);
    for(var a = 0; a < dataset.length; a++) {
			 if(dataset[a][1] >= d && dataset[a][1] < d + 100) { 
				    eventArray.push(dataset[a]);
				    }
			 }
console.log(eventArray);
          
drawSubCircles();
//drawBodyText();

          var year = i;
			d3.selectAll('.yearCircles')
				.style('opacity',.4);
			d3.selectAll('.heading')
				.remove();
			d3.select(this)
				.style('opacity',1);
    
          })
		.transition()
		.delay(2000)
		.duration(1000)
		.style('opacity',0.2);
    
    
}


/*function drawTexts(){
    
    d3.select('#svg')
    			.append("text")
    			.text(function() {
					return d[0];
					})
    			.attr('class','heading')
    			.attr('x',300)
    			.attr('y',195)
    			.style('fill','white')
    			.style('font-family','Bebas')
    			.style('text-anchor','middle')
    			.style('font-size','32px')
                .style('opacity',0)
                .transition()
                .delay(500)
                .duration(1000)
				.style('opacity',1);
          
          d3.select('#svg')
    			.append("text")
    			.text(function() {
					return d[1];
					})
    			.attr('class','heading')
    			  .attr('x',650)
    			.attr('y',400)
    			.style('fill','black')
    			.style('font-family','Bebas')
    			.style('text-anchor','start')
    			.style('font-size','150px')
				.style('opacity',1);
        
			
			d3.select('#svg')
    			.append("text")
    			.text(function() {
					return d[4];
					})
    			.attr('class','heading')
    			.attr('x',300)
    			.attr('y',235)
    			.style('fill','white')
    			.style('font-family','Avenir Next')
    			.style('text-anchor','middle')
    			.style('font-size','21px')
                .style('opacity',0)
                .transition()
                .delay(500)
                .duration(1000)
				.style('opacity',1);
          
}*/

				
window.onload = function() {
    drawMainTitle();
}