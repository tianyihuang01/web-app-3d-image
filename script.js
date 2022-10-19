const ACTIVE = 'active';

const active_video = document.querySelectorAll(
	'.main-structure .content video'
);
const active_video_overlay = document.querySelector(
	'.main-structure .content .video-overlay'
);

const menu_logo = document.querySelector('header .menu-logo');
const main_structure = document.querySelector('.main-structure');
const main_header = document.querySelector('.content .text-description h1');
const second_header = document.querySelector('.content .text-description h2');
const paragraph = document.querySelector('.content .text-description p');
const text_link = document.querySelector('.content .text-description a');
const menu_button = document.querySelectorAll('.aside-menu a');

active_video[0].classList.remove(ACTIVE);
active_video[0].classList.add(ACTIVE);
active_video_overlay.className = 'video-overlay video-overlay-island';

main_header.innerHTML = CONTENT_INFO.island.h1;
second_header.innerHTML = CONTENT_INFO.island.h2;
paragraph.innerHTML = CONTENT_INFO.island.p;
text_link.innerHTML = 'Explore';

menu_logo.addEventListener('click', () => {
	menu_logo.classList.toggle(ACTIVE);
	main_structure.classList.toggle(ACTIVE);
});

menu_button.forEach((button, index) => {
	button.addEventListener('click', () => {
		active_video.forEach((video) => {
			video.classList.remove(ACTIVE);
		});
		active_video[index].classList.add(ACTIVE);
		modify_content(index);
	});
});

function modify_content(index) {
	switch (index) {
		case 0:
			active_video_overlay.className = 'video-overlay video-overlay-island';
			main_header.innerHTML = CONTENT_INFO.island.h1;
			second_header.innerHTML = CONTENT_INFO.island.h2;
			paragraph.innerHTML = CONTENT_INFO.island.p;
			break;
		case 1:
			active_video_overlay.className = 'video-overlay video-overlay-spring';
			main_header.innerHTML = CONTENT_INFO.spring.h1;
			second_header.innerHTML = CONTENT_INFO.spring.h2;
			paragraph.innerHTML = CONTENT_INFO.spring.p;
			break;
		case 2:
			active_video_overlay.className = 'video-overlay video-overlay-summer';
			main_header.innerHTML = CONTENT_INFO.summer.h1;
			second_header.innerHTML = CONTENT_INFO.summer.h2;
			paragraph.innerHTML = CONTENT_INFO.summer.p;
			break;
		case 3:
			active_video_overlay.className = 'video-overlay video-overlay-autumn';
			main_header.innerHTML = CONTENT_INFO.autumn.h1;
			second_header.innerHTML = CONTENT_INFO.autumn.h2;
			paragraph.innerHTML = CONTENT_INFO.autumn.p;
			break;
		case 4:
			active_video_overlay.className = 'video-overlay video-overlay-winter';
			main_header.innerHTML = CONTENT_INFO.winter.h1;
			second_header.innerHTML = CONTENT_INFO.winter.h2;
			paragraph.innerHTML = CONTENT_INFO.winter.p;
			break;
		default:
			active_video_overlay.className = 'video-overlay video-overlay-island';
			main_header.innerHTML = CONTENT_INFO.island.h1;
			second_header.innerHTML = CONTENT_INFO.island.h2;
			paragraph.innerHTML = CONTENT_INFO.island.p;
			break;
	}
}
