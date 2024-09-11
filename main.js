
import './style.css'
//import javascriptLogo from './javascript.svg'

import { header } from './src/componentes/header/header';
document.body.append(header);

import { mainPart } from './src/componentes/mainPart/mainPart';
document.body.append(mainPart)

import { footer } from './src/componentes/Common/common';
document.body.append(footer);

import { landingPage } from './src/componentes/landingPage/landingPage';


landingPage();

