'use strict'


$(document).ready(() => {
    $('.main-menu li').hover(
        event => {
            const $li = $(event.target).closest('li');
            //remove all li class
            $('.main-menu li').removeClass('active');
            $li.addClass('active');
            const itemName = event.target.dataset.item;
            const navbarAdvancedName =  `.navbar-advanced-${itemName}`;
            $(navbarAdvancedName).show();
        },
        event => {
            //const $li = $(event.target).closest('li');
            //$li.removeClass('active');

            //const itemName = event.target.dataset.item;
            //const navbarAdvancedName =  `.navbar-advanced-${itemName}`;
            //$(navbarAdvancedName).hide();
        }
    );

    $('.navbar-advanced .item').hover(
        event => {
            console.debug('navbar in hover');
            //$('.navbar-advanced-one').show();
            //$('.navbar-advanced-two').show();
        },
        event => {
            console.debug(event.target);
            console.debug('navbar out hover');
            //const itemInner = $(event.target).find('.item-inner');
            $(event.target).hide();
        }
    );
});
