const discos = [

    {
        nombre: 'Sinfonía No. 9',
        artista: 'Ludwig Van Beethoven',
        lanzamiento: '1951',
        genero: 'clasica',
        pais: 'alemania',
        id: '1',
        precio: '200',
        portada: '../../public/portadas/9na_sinfonia.jpg'
        
    
    },
    {
        nombre: 'A banda do Zé Pretinho',
        artista: 'Jorge Ben Jor',
        lanzamiento: '1978',
        genero: 'samba',
        pais: 'brasil',
        id: '2',
        precio: '150'
    },
    {
        nombre: 'Joao Gilberto',
        artista: 'Joao Gilberto',
        lanzamiento: '1973',
        genero: 'bossa-nova',
        pais: 'brasil',
        id: '3',
        precio: '250'
    },
    {
        nombre: 'Os Afro-Sambas',
        artista: 'Baden Powell',
        lanzamiento: '2005',
        genero: 'samba',
        pais: 'brasil',
        id: '280'
    },
    {
        nombre: 'El amor despues del amor',
        artista: 'Fito Paez',
        lanzamiento: '1992',
        genero: 'rock',
        pais: 'argentina',
        id: '5',
        precio: '200'
    },
    {
        nombre: 'Wagner:Götterdämerung',
        artista: 'Richard Wagner',
        lanzamiento: '2013',
        genero: 'opera',
        pais: 'alemania',
        id: '6',
        precio: '300'
    },

    {
        nombre: 'Caetano Veloso',
        artista: 'Caetano Veloso',
        lanzamiento: '1986',
        genero: 'bossa-nova',
        pais: 'brasil',
        id: '7',
        precio: '300'
    },
    {
        nombre: 'Giros',
        artista: 'Fito Paez',
        lanzamiento: '1985',
        genero: 'Rock',
        pais: 'argentina',
        id: '8',
        precio: '200'
    },
    {
        nombre: 'Wagner: Tristan und Isolde',
        artista: 'Richard Wagner',
        lanzamiento: '1966',
        genero: 'opera',
        pais: 'argentina',
        id: '9',
        precio: '300'
    },
    {
        nombre: 'Live at Umbria Jazz',
        artista: 'Joao Gilberto',
        lanzamiento: '2021',
        genero: 'bossa',
        id: '10',
        precio: '250'
    },
    {
        nombre: 'Asondeguerra Tour',
        artista: 'Juan Luis Guerra',
        lanzamiento: '2013',
        genero: 'merengue',
        pais: 'republica-dominicana',
        id: '11',
        precio: '300'
    },
    {
        nombre: 'Tchaikovsky:Swan Lake',
        artista: 'Pyotr Ilyich Tckaikovski',
        lanzamiento: '2002',
        genero: 'clasica',
        pais: 'rusia',
        id: '12',
        precio: '200'
    },
    {
        nombre: 'Seventh Son of a Seventh Son',
        artista: 'Iron Maiden',
        lanzamiento: '1988',
        genero: 'rock',
        pais: 'inglaterra',
        id: '13',
        precio: '250'
    },
    {
        nombre: 'La La La',
        artista: 'Fito Paez',
        lanzamiento: '1986',
        genero: 'rock',
        pais: 'argentina',
        id: '14',
        precio: '230'
    },
    {
        nombre: 'Oktubre',
        artista: 'Patricio Rey y sus Redonditos de Ricota',
        lanzamiento: '1986',
        genero: 'rock',
        pais: 'argentina',
        id: '15',
        precio: '230'
    },
    {
        nombre: 'Gulp!',
        artista: 'Patricio Rey y sus Redonditos de Ricota',
        lanzamiento: '1985',
        genero: 'rock',
        pais: 'argentina',
        id: '16',
        precio: '230'
    },
    {
        nombre: 'good kid, m.A.A.d city',
        artista: 'Kendrick Lamar',
        lanzamiento: '2012',
        genero: 'hip-hop',
        pais: 'estados-unidos',
        id: '17',
        precio: '280'
    },
    {
        nombre: '2014 Forest Hills Drive',
        artista: 'J. Cole',
        lanzamiento: '2014',
        genero: 'hip-hop',
        pais: 'estados-unidos',
        id: '18',
        precio: '280'
    },
    {
        nombre: 'Illmatic',
        artista: 'Nas',
        lanzamiento: '1994',
        genero: 'hip-hop',
        pais: 'estados-unidos',
        id: '19',
        precio: '300'
    },
    {
        nombre: 'Solo Monk ',
        artista: 'Thelonious monk',
        lanzamiento: '1964',
        genero: 'jazz',
        pais: 'estados-unidos',
        id: '20',
        precio: '300'
    },
    {
        nombre: 'The Score',
        artista: 'Fugees',
        lanzamiento: '1996',
        genero: 'hip-hop',
        pais: 'estados-unidos',
        id: '21',
        precio: '250'
    },
    {
        nombre: 'Matasano',
        artista: 'Roberto Firpo',
        lanzamiento: '2019',
        genero: 'tango',
        pais: 'argentina',
        id: '22',
        precio: '300'
    },
    {
        nombre: 'Nave Maria',
        artista: 'Tom Zé',
        lanzamiento: '1984',
        genero: 'samba',
        pais: 'brasil',
        id: '23',
        precio: '280'
    },
    {
        nombre: 'The Head On the Door',
        artista: 'The Cure',
        lanzamiento: '1985',
        genero: 'rock',
        pais: 'inglaterra',
        id: '24',
        precio: '280'
    },
    {
        nombre: 'Amanecer Búho',
        artista: 'Buenos Muchachos',
        lanzamiento: '2003',
        genero: 'rock',
        pais: 'uruguay',
        id: '25',
        precio: '230'
    },
    {
        nombre: 'Sur',
        artista: 'Jaime Roos',
        lanzamiento: '1987',
        genero: 'rock',
        pais: 'uruguay',
        id: '26',
        precio: '300'
    },
    {
        nombre: 'Siempre son las cuatro',
        artista: 'Jaime Roos',
        lanzamiento: '1982',
        genero: 'rock',
        pais: 'uruguay',
        id: '27',
        precio: '250'
    },
    {
        nombre: 'Aquello',
        artista: 'Jaime Roos',
        lanzamiento: '1981',
        genero: 'rock',
        pais: 'uruguay',
        id: '28',
        precio: '300'
    },
    {
        nombre: 'Tonadas',
        artista: 'Simón Díaz',
        lanzamiento: '1974',
        genero: 'folklore',
        pais: 'venezuela',
        id: '29',
        precio: '300'
    },
    {
        nombre: 'Puccini: Turandot',
        artista: 'Giacomo Puccini',
        lanzamiento: '1982',
        genero: 'opera',
        pais: 'italia',
        id: '30',
        precio: '350'
    },
    {
        nombre: 'London Calling',
        artista: 'The Clash',
        lanzamiento: '1979',
        genero: 'rock',
        pais: 'inglaterra',
        id: '31',
        precio: '280'
    },
    {
        nombre: 'Luzbelito',
        artista: 'Patricio rey y sus Redonditos de Ricota',
        lanzamiento: '1996',
        genero: 'rock',
        pais: 'argentina',
        id: '31',
        precio: '230'
    },
    {
        nombre: 'La Mosca y la Sopa',
        artista: 'Patricio Rey y sus Redonditos de Ricota',
        lanzamiento: '1991',
        genero: 'rock',
        pais: 'argentina',
        id: '32',
        precio: '230'
    },
    {
        nombre: 'Artaud',
        artista: 'Pescado Rabioso',
        lanzamiento: '1973',
        genero: 'rock',
        pais: 'argentina',
        id: '33',
        precio: '350'
    },
    {
        nombre: 'Piano Bar',
        artista: 'Charly garcía',
        lanzamiento: '1984',
        genero: 'rock',
        pais: 'argentina',
        id: '34',
        precio: '350'
    },
    {
        nombre: 'Clics Modernos',
        artista: 'Charly García',
        lanzamiento: '1983',
        genero: 'rock',
        pais: 'argentina',
        id: '35',
        precio: '300'
    },
    {
        nombre: 'La Trampera',
        artista: 'Aníbal Troilo',
        lanzamiento: '2012',
        genero: 'tango',
        pais: 'argentina',
        id: '36',
        precio: '300'
    },
    {
        nombre: 'Troilo Grela',
        artista: 'Roberto Grela',
        lanzamiento: '2013',
        genero: 'tango',
        pais: 'argentina',
        id: '37',
        precio: '300'
    },
    {
        nombre: 'Festa no Sertao',
        artista: 'Dominguinhos',
        lanzamiento: '1973',
        genero: 'forro',
        pais: 'brasil',
        id: '38',
        precio: '300'
    },
    {
        nombre: 'Cada um Belisa um Pouco',
        artista: 'Dominguinhos',
        lanzamiento: '2003',
        genero: 'forro',
        pais: 'brasil',
        id: '39',
        precio: '300'
    },
    {
        nombre: 'Wagner: Parsifal',
        artista: 'Richard Wagner',
        lanzamiento: '1973',
        genero: 'opera',
        id: '40',
        precio: '250'
    },
    {
        nombre: 'Show',
        artista: 'Frankie Ruiz',
        lanzamiento: '1996',
        genero: 'salsa',
        pais: 'puerto-rico',
        id: '41',
        precio: '300'
    },
    {
        nombre: 'Wave',
        artista: 'Antonio Carlos Jobim',
        lanzamiento: '1967',
        genero: 'bossa-nova',
        pais: 'brasil',
        id: '42',
        precio: '300'
    },
    {
        nombre: 'Alô malandragem maloca o Flagrante',
        artista: 'Bezerra Da Silva',
        lanzamiento: '1986',
        genero: 'samba',
        pais: 'brasil',
        id: '43',
        precio: '250'
    },
    {
        nombre: 'Cole World: The sideline story',
        artista: 'J. Cole',
        lanzamiento: '2011',
        genero: 'hip-hop',
        pais: 'estados-unidos',
        id: '44',
        precio: '300'
    },
    {
        nombre: 'Esto fue lo que trajo el barco',
        artista: 'ismael Rivera',
        lanzamiento: '1972',
        genero: 'salsa',
        pais: 'puerto-rico',
        id: '45',
        precio: '200'
    },
    {
        nombre: 'Combat Rock',
        artista: 'The Clash',
        lanzamiento: '1982',
        genero: 'rock',
        pais: 'inglaterra',
        id: '46',
        precio: '200'
    },
    {
        nombre: 'The Payback',
        artista: 'James Brown',
        lanzamiento: '1973',
        genero: 'funk',
        pais: 'estados-unidos',
        id: '47',
        precio: '300'
    },
    {
        nombre: 'Tijuana Moods',
        artista: 'Charles Mingus',
        lanzamiento: '1962',
        genero: 'jazz',
        pais: 'estados-unidos',
        id: '48',
        precio: '350'
    },
    {
        nombre: 'Elis & Tom',
        artista: 'Elis Regina, Antônio Carlos Jobim',
        lanzamiento: '1974',
        genero: 'bossa-nova',
        pais: 'brasil',
        id: '49',
        precio: '300'
    },
    {
        nombre: 'Paranoid',
        artista: 'Black Sabbath',
        lanzamiento: '1970',
        genero: 'rock',
        pais: 'inglaterra',
        id: '50',
        precio: '300'
    },
    {
        nombre: 'Rock in Rio (Live)',
        artista: 'Iron Maiden',
        lanzamiento: '2002',
        genero: 'rock',
        pais: 'inglaterra',
        id: '51',
        precio: '250'
    },
    {
        nombre: 'Iron Maiden',
        artista: 'Iron Maiden',
        lanzamiento: '1980',
        genero: 'rock',
        pais: 'inglaterra',
        id: '52',
        precio: '200'
    },
    {
        nombre: 'The Scream',
        artista: 'Siouxsie and the Banshees',
        lanzamiento: '1978',
        genero: 'rock',
        pais: 'Inglaterra',
        id: '53',
        precio: '250'
    },
    {
        nombre: 'Close to the Edge',
        artista: 'Yes',
        lanzamiento: '1972',
        genero: 'rock',
        pais: 'inglaterra',
        id: '54',
        precio: '230'
    },
    {
        nombre: 'Mask',
        artista: 'Bauhaus',
        lanzamiento: '1981',
        genero: 'rock',
        pais: 'inglaterra',
        id: '55',
        precio: '300'
    },
    {
        nombre: 'Physical Graffiti',
        artista: 'Led Zepellin',
        lanzamiento: '1975',
        genero: 'rock',
        pais: 'inglaterra',
        id: '56',
        precio: '250'
    },
    {
        nombre: 'Made in Japan',
        artista: 'Deep Purple',
        lanzamiento: '1972',
        genero: 'rock',
        pais: 'inglaterra',
        id: '57',
        precio: '300'
    },
    {
        nombre: 'The miseducation of Lauryn Hill',
        artista: 'Lauryn Hill',
        lanzamiento: '1998',
        genero: 'hip-hop',
        pais: 'estados-unidos',
        id: '58',
        precio: '300'
    },
    {
        nombre: 'In the flat field',
        artista: 'Bauhaus',
        lanzamiento: '1980',
        genero: 'rock',
        pais: 'inglaterra',
        id: '59',
        precio: '200'
    },
    {
        nombre: 'Tinderbox',
        artista: 'Siouxsie and the banshees',
        lanzamiento: '1986',
        genero: 'rock',
        pais: 'inglaterra',
        id: '60',
        precio: '280'
    },
    {
        nombre: 'Ok Computer',
        artista: 'Radiohead',
        lanzamiento: '1997',
        genero: 'rock',
        pais: 'inglaterra',
        id: '61',
        precio: '300'
    },
    {
        nombre: 'Disintegration',
        artista: 'The Cure',
        lanzamiento: 'mayo 2, 1989',
        genero: 'rock',
        pais: 'inglaterra',
        id: '62',
        precio: '250'
    },
    {
        nombre: 'Led Zepellin III',
        artista: '1970',
        lanzamiento: 'enero 1, 1970',
        genero: 'rock',
        pais: 'inglaterra',
        id: '63',
        precio: '300'
    },
    {
        nombre: 'Pearl',
        artista: 'Janis Joplin',
        lanzamiento: ' enero 11, 1971',
        genero: 'rock',
        pais: 'estados-unidos',
        id: '64',
        precio: '350'
    },
    {
        nombre: 'Adoniran Barbosa',
        artista: 'Adoniran Barbosa',
        lanzamiento: 'agosto 5, 1974',
        genero: 'samba',
        pais: 'brasil',
        id: '65',
        precio: '250'
    },
    {
        nombre: 'Yamandú + Dominguinhos',
        artista: 'Yamandú Costa',
        lanzamiento: 'septiembre 3, 2007',
        genero: 'samba',
        pais: 'brasil',
        id: '66',
        precio: '300'
    },
    {
        nombre: "Ol' Waylon",
        artista: 'Waylon Jennings',
        lanzamiento: '1977',
        genero: 'country',
        pais: 'estados-unidos',
        id: '67',
        precio: '350'
    },
    {
        nombre: 'Yamandú',
        artista: 'Yamandú Costa',
        lanzamiento: '2001',
        genero: 'samba',
        pais: 'brasil',
        id: '68',
        precio: '200'
    },
    {
        nombre: 'Kid A',
        artista: 'Radiohead',
        lanzamiento: '2000',
        genero: 'rock',
        pais: 'inglaterra',
        id: '69',
        precio: '350'
    },
    {
        nombre: 'Caetano',
        artista: 'Caetano Veloso',
        lanzamiento: '1987',
        genero: 'bossa-nova',
        pais: 'brasil',
        id: '70',
        precio: '200'
    },
    {
        nombre: 'Construcao',
        artista: 'Chico Buarque',
        lanzamiento: '1971',
        genero: 'bossa-nova',
        pais: 'brasil',
        id: '71',
        precio: '280'
    },
    {
        nombre: 'Chico Buarque de Hollanda Vol. 3',
        artista: 'Chico Buarque',
        lanzamiento: '1968',
        genero: 'bossa-nova',
        pais: 'brasil',
        id: '72',
        precio: '300'
    },
    {
        nombre: 'Zombie',
        artista: 'Fela Kuti',
        lanzamiento: '1976',
        genero: 'afro-beat',
        pais: 'nigeria',
        id: '73',
        precio: '350'
    },
    {
        nombre: 'Cartola',
        artista: 'Cartola',
        lanzamiento: '1976',
        genero: 'samba',
        pais: 'brasil',
        id: '74',
        precio: '230'
    },
    {
        nombre: 'Ready to Die',
        artista: 'Notorious B.I.G.',
        lanzamiento: '1994',
        genero: 'hip-hop',
        pais: 'estados-unidos',
        id: '75',
        precio: '280'
    },
    {
        nombre: 'Abbey Road',
        artista: 'The Beatles',
        lanzamiento: '1969',
        genero: 'rock',
        pais: 'inglaterra',
        id: '76',
        precio: '350'
    },
    {
        nombre: 'Extensions',
        artista: 'Mccoy Tyner',
        lanzamiento: '1970',
        genero: 'jazz',
        pais: 'estados-unidos',
        id: '77',
        precio: '350'
    },
    {
        nombre: 'Cachao:Master Sessions',
        artista: 'Cachao',
        lanzamiento: '1994',
        pais: 'cuba',
        id: '78',
        precio: '300'
    },
    {
        nombre: 'Gentleman',
        artista: 'Fela Kuti',
        lanzamiento: '1973',
        genero: 'afro-beat',
        pais: 'nigeria',
        id: '79',
        precio: '300'
    },
    {
        nombre: 'Prince Nico Mbarga & Rockafill jazz 1976',
        artista: 'Prince Nico Mbarga',
        lanzamiento: '1976',
        genero: 'afro-beat',
        pais: 'nigeria',
        id: '80',
        precio: '250'
    },
    {
        nombre: 'Nevermind',
        artista: 'Nirvana',
        lanzamiento: '1991',
        genero: 'rock',
        pais: 'estados-unidos',
        id: '81',
        precio: '280'
    },
    {
        nombre: 'Palimpsesto',
        artista: 'Inti Illimani',
        lanzamiento: '1981',
        genero: 'folclore',
        pais: 'inglaterra',
        id: '82',
        precio: '300'
    },
    {
        nombre: 'Surfer Rosa',
        artista: 'The Pixies',
        lanzamiento: '1988',
        genero: 'rock',
        pais: 'estados unidos',
        id: '83',
        precio: '250'
    },
    {
        nombre: 'The dark side of the Moon',
        artista: 'Pink Floyd',
        lanzamiento: '1973',
        genero: 'rock',
        pais: 'inglaterra',
        id: '84',
        precio: '300'
    },
    {
        nombre: 'The Wall',
        artista: 'Pink Floyd',
        lanzamiento: '1979',
        genero: 'rock',
        pais: 'inglaterra',
        id: '85',
        precio: '300'
    },
    {
        nombre: 'Miles Ahead',
        artista: 'Miles Davis',
        lanzamiento: '1957',
        genero: 'jazz',
        pais: 'estados-unidos',
        id: '86',
        precio: '350'
    },
    {
        nombre: 'Guitarra negra',
        artista: 'Alfredo Zitarrosa',
        lanzamiento: '1978',
        genero: 'folclore',
        pais: 'uruguay',
        id: '87',
        precio: '230'
    },
    {
        nombre: 'Mateo solo bien se lame',
        artista: 'Eduardo Mateo',
        lanzamiento: '1971',
        genero: 'mpu',
        pais: 'uruguay',
        id: '88',
        precio: '300'
    },
    {
        nombre: 'Dos',
        artista: 'Jorge Lazaroff',
        lanzamiento: '1983',
        genero: 'mpu',
        pais: 'inglaterra',
        id: '88',
        precio: '300'
    },
    {
        nombre: 'On the Wall',
        artista: 'Michael Jackson',
        lanzamiento: '1979',
        genero: 'pop',
        pais: 'estados-unidos',
        id: '89',
        precio: '200'
    },
    

]

export default discos;