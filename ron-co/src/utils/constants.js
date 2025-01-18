// utils/constants.js
export const HOUSES = {
    GRYFFINDOR: 'Gryffindor',
    SLYTHERIN: 'Slytherin',
    HUFFLEPUFF: 'Hufflepuff',
    RAVENCLAW: 'Ravenclaw'
};

export const HOUSE_COLORS = {
    [HOUSES.GRYFFINDOR]: {
    primary: '#740001',
    secondary: '#D3A625',
    background: '#AE0001'
    },
    [HOUSES.SLYTHERIN]: {
    primary: '#1A472A',
    secondary: '#5D5D5D',
    background: '#2A623D'
    },
    [HOUSES.HUFFLEPUFF]: {
    primary: '#FFD800',
    secondary: '#000000',
    background: '#ECB939'
    },
    [HOUSES.RAVENCLAW]: {
    primary: '#0E1A40',
    secondary: '#946B2D',
    background: '#222F5B'
    }
};

export const QUIZ_QUESTIONS = [
    {
    id: 1,
    question: '¿Qué cualidad valoras más?',
    options: [
        { text: 'Valentía y coraje', house: HOUSES.GRYFFINDOR },
        { text: 'Ambición y astucia', house: HOUSES.SLYTHERIN },
        { text: 'Lealtad y trabajo duro', house: HOUSES.HUFFLEPUFF },
        { text: 'Sabiduría e inteligencia', house: HOUSES.RAVENCLAW }
    ]
    },
    {
    id: 2,
    question: '¿Qué mascota preferirías tener?',
    options: [
        { text: 'León', house: HOUSES.GRYFFINDOR },
        { text: 'Serpiente', house: HOUSES.SLYTHERIN },
        { text: 'Tejón', house: HOUSES.HUFFLEPUFF },
        { text: 'Águila', house: HOUSES.RAVENCLAW }
    ]
    },
    {
    id: 3,
    question: '¿Cómo te enfrentas a los desafíos?',
    options: [
        { text: 'De frente y sin dudar', house: HOUSES.GRYFFINDOR },
        { text: 'Planeando estratégicamente', house: HOUSES.SLYTHERIN },
        { text: 'Con paciencia y perseverancia', house: HOUSES.HUFFLEPUFF },
        { text: 'Analizando todas las opciones', house: HOUSES.RAVENCLAW }
    ]
    },
    {
    id: 4,
    question: '¿Qué lugar de Hogwarts te atrae más?',
    options: [
        { text: 'La Torre de Gryffindor', house: HOUSES.GRYFFINDOR },
        { text: 'Las Mazmorras', house: HOUSES.SLYTHERIN },
        { text: 'La Cocina', house: HOUSES.HUFFLEPUFF },
        { text: 'La Biblioteca', house: HOUSES.RAVENCLAW }
    ]
    },
    {
    id: 5,
    question: '¿Qué legado te gustaría dejar?',
    options: [
        { text: 'Ser recordado por tus actos heroicos', house: HOUSES.GRYFFINDOR },
        { text: 'Alcanzar una posición de gran influencia', house: HOUSES.SLYTHERIN },
        { text: 'Haber ayudado a muchas personas', house: HOUSES.HUFFLEPUFF },
        { text: 'Haber hecho grandes descubrimientos', house: HOUSES.RAVENCLAW }
    ]
    }
];

export const HOUSE_TRAITS = {
    [HOUSES.GRYFFINDOR]: ['valentía', 'coraje', 'determinación', 'caballerosidad'],
    [HOUSES.SLYTHERIN]: ['ambición', 'astucia', 'liderazgo', 'determinación'],
    [HOUSES.HUFFLEPUFF]: ['lealtad', 'paciencia', 'justicia', 'trabajo duro'],
    [HOUSES.RAVENCLAW]: ['inteligencia', 'creatividad', 'sabiduría', 'originalidad']
};