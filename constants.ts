
import { Campaign, Celebrity } from './types';

export const MONTHS = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

export const CELEBRITIES: Celebrity[] = [
  {
    id: 'faro',
    name: 'Rodrigo Faro',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCA6AqVB1fNHB8U1WfzvgxqjcHTA2ZWQt5qErf7MPVGJNCk8aIaWyDzNIPt7cBKOtzh6HDD0yeAcfy5zaRXI5G5eZpwknzLL9ImFnIjyGoIZFBPDtJl_WY2Ljgdna-uYIiUf1A5hgPYyVYq6QKW_HMH-TwSNIikfOraVgB8nQeGCHB6Np7CzABbQ_MOyUdkuCbgkBR2ve9M5btquLw21k3CkzFGZocgNh_WQaB1WrLKCABxlba_b459f9f2yG3mh69lNJJWQjpXPWI',
    status: 'active'
  },
  {
    id: 'ewbank',
    name: 'G. Ewbank',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsd9OMOTJ7OIUpcvtomUWQE2FM1LvnmBhyj2js4Ao9dNYMXJnkpKW7uaDk6t8N_WT5995dRUhaNoeMVbo7Xo_985hc87QY-Z3SzgIvR61pEghJmak7whs3VGIhNYxYHcfqiUlK1s_9q1R6rhT_HI6W4eS59W8V5kjy_suapELLZF-j8jqBeg9P9Ncl-zhKz75tg27nnPOIKQ8FJcct8Z9rGvqU-AHHwuZjvmAOgIGQUgsnt19zrvl2I9r-9FFqvaYseMrU6rhlxNc',
    status: 'active'
  },
  {
    id: 'maria',
    name: 'A. Maria',
    image: 'https://picsum.photos/seed/maria/200/200',
    status: 'inactive'
  },
  {
    id: 'neymar',
    name: 'Neymar',
    image: 'https://picsum.photos/seed/neymar/200/200',
    status: 'inactive'
  }
];

export const CAMPAIGNS: Campaign[] = [
  {
    id: '1',
    title: 'Bloco de Ofertas',
    description: 'Aproveite a folia para acelerar as vendas com condições especiais de financiamento.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9UZRR7OmAuO35r043e2xJ8q0XlEr1cHQD_TK5-AJP6-BQZxC9zG7XLLoZ31845T8iQAGzuBNgUA6r3Ao9IdBKPXY5Ob86hdx6aRKHV4nar3fB1i8Du_bi8Jm0vumlgsFL7yDiQbZCI-p7ruixn5_NRDsVOHJ0bfduVyO5yfe0DpuBz6zyHtxcXtENi6-Zfmpi-VrrCxqidKh2DdvJrb-bCIxYTyrA8n0FED1kovhocta9ePt5DQRF3BbSAal8I8uHWMLZJfsEdwQ',
    category: 'Sazonal',
    week: 'Semana 01',
    dates: '01 a 07 de Fev',
    status: 'active'
  },
  {
    id: '2',
    title: 'Mega Liquidação',
    description: 'Foco total em conversão de leads e limpeza de estoque com taxas reduzidas.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRh2K0Ty-hFTVkOp6Snqt6oOzVqY-3wB0AHhCgnytiXlobClI_WzITGFVK5Gdlc4SBu_7wrcZtdqHxxq3xFEjeUcgpA4zaTXbkd0XS8Q6XdoD1ME4WVsdyNJpUAWLmPjCYBfBJU6-3mXNGvzCmfD3EtqzRs1SWmm1lmFm_rAZEuGWwK1USWoRU1llrHghHhrZhgWlqSk-IXa1LDTR54sSD3ODhtI6OByWmBHMIUld6tX2vcITKN_7ID5ISTTxfj_yg9JauLXX_mJ0',
    category: 'Performance',
    week: 'Semana 02',
    dates: '08 a 14 de Fev',
    status: 'active',
    celebrity: 'Rodrigo Faro',
    price: 45000,
    contractId: 'CTR-2024-089'
  },
  {
    id: '3',
    title: 'Zera Estoque',
    description: 'A campanha ideal para renovar seu pátio com giro rápido de unidades seminovas.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAN1rpWxgoh9IS0Erf3lL-KbEj7Gy-WAdaj5-NTJ0--KYj2Ztsqxc6h_tPcjElU9Q5f10AW0BWcPwNzxiqzI26ytWhyqZL2AoUOY820-M1WyppoYxXc85-uuPRt6AZFNcQ3cKkiuMuebHcm5YnqbSA_o2RIhCQ4Raj3MiLySLjG64dootPmPzM62Z4vEnotNLWj7SrEn1oM3ViVcs2BLCP4IiAsMSI9FiitnsxXcQl25qoqGPdMJbBFft30Y9yIO8rYGBeML_I5hHU',
    category: 'Estoque',
    week: 'Semana 03',
    dates: '15 a 21 de Fev',
    status: 'active'
  },
  {
    id: '4',
    title: 'Aniversário Dealer',
    description: 'Celebre com seus clientes e gere credibilidade através da história da loja.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRehW_oPf2Oaz5Gm6ZdyS6Vgx_evlrb2pkQLCm2u1AcEbFTEqKel9TnDYb9c2WNE9egGQtFKvqZgeTXPKKnTa6IGN_3KucSqEISsn2ywuW0-rnh815o3QUfHQ8cGLOJm0879gmIugMLcihwuuJIZhMMoh9sdG3t3XiJ_1gJmektFC83o2e8nev1MPJAekRNAkE6JncW_DACRb7AO0EE_enJZR5Aj1vOyD8x1c-oafkCP1k0R5Zbvjhc1QEA-5uPy8usaIxT7KeMbo',
    category: 'Marca',
    week: 'Semana 04',
    dates: '22 a 28 de Fev',
    status: 'active'
  }
];
