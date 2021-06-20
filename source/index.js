import Tooltip from './project-ui/tooltip';
import Dropdown from './project-ui/dropdown';
import Tabs from './project-ui/tabs';
import Snackbar from './project-ui/snackbar';
// create tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();
// create dropdown
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown=>
    {
    const instance = new Dropdown(dropdown);
    instance.init();
    });
// create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();
// create snackbar
const snackbar = new Snackbar();
snackbar.init();
const button = document.querySelector('button');
button.addEventListener('click',()=>
{
    snackbar.show('Thanks for Shopping!');
});