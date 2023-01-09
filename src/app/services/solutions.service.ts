export class SolutionService {
    solutions = [
        {
            nom: 'Gestion Locative',
            logiciel: 'GILOC',
            items: [{ icon: 'fa fa-address-book', lib: 'Gestion des Proprietaires' }, { icon: 'fa fa-users', lib: 'Gestion des Locataires' },
            { icon: 'fa fa-calendar', lib: 'Appel des Loyers & Export' }, { icon: 'fa fa-file-invoice-dollar', lib: 'Encaissement loyer, charge et relance' },
            {icon: 'fa fa-cogs', lib: 'Gestion des dépenses & Travaux'}, {icon: 'fa fa-bar-chart', lib: 'Point des loyers et décomptes'}]
        },
        {
            nom: 'Promotion Immobilière',
            logiciel: 'GIMMOBIL',
            items: [{ icon: 'fa fa-laptop-house', lib: 'Gestion des programmes immobiliers' }, { icon: 'fa fa-user-friends', lib: 'Démarche commerciale' },
            { icon: 'fa fa-file-invoice-dollar', lib: 'Client et Contrat' }, { icon: 'fa fa-digging', lib: 'Gestion multi chantiers' },
            {icon: 'fa fa-wallet', lib: 'Gestion des dépenses'}, {icon: 'fa fa-bar-chart', lib: 'Suivi ventes immobilières'}]
        },
        {
            nom: 'Gestion Hotelière',
            logiciel: 'IHM-HOTEL',
            items: [{ icon: 'fa fa-hotel', lib: 'Configuration des Hotels' }, { icon: 'fa fa-headset', lib: 'Réservation en ligne' },
            { icon: 'fa fa-users-cog', lib: 'Gestion Services & Personnel' }, { icon: 'fa fa-plate-wheat', lib: 'Gestion du Restaurant' },
            {icon: 'fa fa-cash-register', lib: 'Gestion de la Caisse'}, {icon: 'fa fa-line-chart', lib: 'Tableaux de bord et Alertes'}]
        },
        {
            nom: 'Caisse & Suivi CA',
            logiciel: 'CAISSIA',
            items: [{ icon: 'fa fa-cash-register', lib: 'Saisie des ventes' }, { icon: 'fa fa-arrow-right-arrow-left', lib: 'Annulation, échange et retours' },
            { icon: 'fa fa-id-card-clip', lib: 'Remise, Points de fidélité et bon' }, { icon: 'fa fa-list-check', lib: 'Ticket Z' },
            {icon: 'fa fa-pie-chart', lib: 'Statistiques Caisse'}, {icon: 'fa fa-user-lock', lib: 'Sécurité et clôture périodique'}]
        },
        {
            nom: 'Appro & Distribution',
            logiciel: 'APPRODIST',
            items: [{ icon: 'fa fa-address-book', lib: 'Client cible' }, { icon: 'fa fa-bag-shopping', lib: 'Problématiques de Vente' },
            { icon: 'fa fa-box-open', lib: 'Problématiques de Stock' }, { icon: 'fa fa-lightbulb', lib: 'Solutions opérationnelles' },
            {icon: 'fa fa-magnifying-glass-chart', lib: 'Suivi Produit'}, {icon: 'fa-brands fa-shopify', lib: 'Suivi Commandes et Ventes'}]
        },
        {
            nom: 'Commerciaux itinérants',
            logiciel: 'MOBIVENTES',
            items: [{ icon: 'fa fa-list-ul', lib: 'Prise de commande et vente' }, { icon: 'fa fa-people-line', lib: 'Gestion clients' },
            { icon: 'fa fa-store', lib: 'Vente des produits' }, { icon: 'fa fa-bullseye', lib: 'Gestion des objectifs commerciaux' },
            {icon: 'fa fa-calendar-days', lib: 'Agenda'}, {icon: 'fa fa-pie-chart', lib: 'Tableaux de bord'}]
        },
        {
            nom: 'Gestion de Credit',
            logiciel: 'CALYPSO',
            items: [{ icon: 'fa fa-question-circle', lib: 'A qui s’adresse la solution ?' }, { icon: 'fa fa-hand-holding-dollar', lib: 'Simulation / Instruction Pret' },
            { icon: 'fa fa-circle-dollar-to-slot', lib: 'Gestion echéancier Remboursement' }, { icon: 'fa fa-calculator', lib: 'Moteur de Calcul' },
            {icon: 'fa fa-piggy-bank', lib: 'Gestion des Remboursements'}, {icon: 'fa fa-pie-chart', lib: 'Reportings et Statistiques'}]
        },
        {
            nom: 'Transfert d\'Argent',
            logiciel: 'CHRONOCASH',
            items: [{ icon: 'fa fa-question-circle', lib: 'Pourquoi une solution dédiée ?' }, { icon: 'fa fa-building', lib: 'Dédiée aux Microfinances' },
            { icon: 'fa fa-clipboard-question', lib: 'Comment ça marche ?' }, { icon: 'fa fa-calculator', lib: 'Traitement de base' },
            {icon: 'fa fa-sliders', lib: 'Gestion opérationnelle'}, {icon: 'fa fa-pie-chart', lib: 'Reportings, Statistiques et Alertes'}]
        },
        {
            nom: 'Assurance Maladie',
            items: [{ icon: 'fa fa-crosshairs', lib: 'Contexte' }, { icon: 'fa fa-hands', lib: 'Maitrise des Dépenses' },
            { icon: 'fa fa-universal-access', lib: 'Efficacité  Opérationnelle' }, { icon: 'fa fa-chart-simple', lib: 'Suivi en Temps Réel' },
            {icon: 'fa fa-cogs', lib: 'Solutions performantes en temps Réel'}, {icon: 'fa fa-lightbulb', lib: 'Avantage de la solution'}]
        },
        {
            nom: 'Projet Architecture, BET',
            logiciel: '',
            items: [{ icon: 'fa fa-crosshairs', lib: 'Problématiques' }, { icon: 'fa fa-hands', lib: 'Planification Projets et Agenda' },
            { icon: 'fa fa-universal-access', lib: 'Consultation d’Entreprises' }, { icon: 'fa fa-chart-simple', lib: 'Suivi Financier' },
            {icon: 'fa fa-cogs', lib: 'Suivi Projets et Collaboration'}, {icon: 'fa fa-lightbulb', lib: 'Outil de pilotage à 360°'}]
        },
        {
            nom: 'Suivi Chantier Architecte',
            logiciel: 'ARCHILOGPRO',
            items: [{ icon: 'fa fa-address-book', lib: 'Problématiques suivi opérationnel' }, { icon: 'fa fa-users', lib: 'Problématiques suivi financier' },
            { icon: 'fa fa-calendar', lib: 'Intégration BPU, DQE et autres docs' }, { icon: 'fa fa-file-invoice-dollar', lib: 'Estimation Déboursés, Budget et CR' },
            {icon: 'fa fa-bar-chart', lib: 'Pointage des travaux de chantier'}, {icon: 'fa fa-cogs', lib: 'Suivi Coûts et rentabilité financière'}]
        },
        {
            nom: 'Suivi Chantier Entrepreneur',
            logiciel: 'ARCHILOGPRO',
            items: [{ icon: 'fa fa-address-book', lib: 'Problématiques suivi opérationnel' }, { icon: 'fa fa-users', lib: 'Problématiques suivi financier' },
            { icon: 'fa fa-calendar', lib: 'Intégration BPU, DQE et autres docs' }, { icon: 'fa fa-file-invoice-dollar', lib: 'Estimation Déboursés, Budget et CR' },
            {icon: 'fa fa-cogs', lib: 'Pointage des travaux de chantier'}, {icon: 'fa fa-bar-chart', lib: 'Suivi Coûts et rentabilité financière'}]
        },
    ]
}