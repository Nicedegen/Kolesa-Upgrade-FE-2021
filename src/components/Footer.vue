<template>
  <footer class="footer">
      <div class="footer__content">
        <div class="footer-contacts">
          <div class="footer-contacts__copyright">© Kolesa Group</div>
          <ul class="footer-contacts__icons">
            <li class="footer-contacts__instagram">
              <a
                href="https://www.instagram.com/kolesagroup/"
                target="_blank"
                title="Участвуй в наших конкурсах в Instagram!"
              >
                <img
                  src="@/assets/icons/instagram.svg"
                  alt="иконка Инстаграма"
                  width="24"
                  height="24"
                />
              </a>
            </li>
            <li class="footer-contacts__youtube">
              <a
                href="https://www.youtube.com/user/kolesakzvideo"
                target="_blank"
                title="Смотри наши видео на YouTube!"
              >
                <img src="@/assets/icons/youtube.svg" alt="икона Ютуба" width="24" height="24" />
              </a>
            </li>
            <li class="footer-contacts__vk">
              <a href="https://vk.com/kolesakz" target="_blank" title="Присоеденяйся к нам в VK!">
                <img src="@/assets/icons/vk.svg" alt="иконка Вконтакте" width="24" height="24" />
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-ideas">
          <p class="footer-ideas__text">
            Есть идеи что улучшить? <br />
            Не знаешь, с кем решить проблему?
          </p>
          <button type="button" class="footer-ideas__btn">Написать</button>
        </div>
      </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
