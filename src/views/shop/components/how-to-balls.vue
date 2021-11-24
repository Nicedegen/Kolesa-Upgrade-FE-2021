<template>
  <div class="how-block">
    <div class="how-block__inner">
      <section class="how-direction">
        <router-link class="how-direction__link-shop"
        to="/shop">
          Kolesa Shop
        </router-link>
        <router-link class="how-direction__link-how"
        to="/shop/how-to-balls">
          / Как получить балы
        </router-link>
        <h2 class="how-direction__title">Как получить балы</h2>
      </section>
      <section class="how-main">
        <div class="how-main__inner">
          <div class="how-main-card"
          v-for="card in cards"
          :key="card.id">
            <div class="how-main-card__inner">
              <div class="how-main-card__icon">
              <img
                :src="card.icon"
                width="32"
                height="32">
              </div>
              <div class="how-main-card__title">
                {{ card.title }}
              </div>
              <div class="how-main-card__balls"
              v-if="card.balls"
              >
                <span>{{ card.balls }}</span>
              </div>
              <div class="how-main-card__balls"
              v-else
              >
              </div>
              <div class="how-main-card__subtitle">
                {{ card.subtitle }}
              </div>
            </div>
            <div class="how-main-card__button">
            <button class="how-main-card__button-inner">Отправить заявку</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'How-to-balls',
  data() {
    return {
      cards: [
        {
          icon: '/assets/icons/conference.png',
          title: 'Выступление на конференциях',
          balls: '90 баллов',
          subtitle: 'Стань спикером на международной конференции по своему направлению',
        },
        {
          icon: '/assets/icons/group.png',
          title: 'Выступление на meetup',
          balls: '60 баллов',
          subtitle: 'Стань спикером в Колёсах на meetup других компаний. Расскажи о наших продуктах и технологиях,которые мы используем',
        },
        {
          icon: '/assets/icons/write.png',
          title: 'Статья на habr/vc.ru/rusbase',
          balls: '60 баллов',
          subtitle: 'Подготовь качественный контент, напиши и опубликуй статью на профильную тему',
        },
        {
          icon: '/assets/icons/group.png',
          title: 'Мастер-классы, тренинги, лекции, подкасты, прямые эфиры',
          balls: '60 баллов',
          subtitle: 'Поделись профессиональными знаниями с коллегами. Важно обучить не менее 6 человек',
        },
        {
          icon: '/assets/icons/racket.png',
          title: 'Организация мероприятия',
          balls: '60 баллов',
          subtitle: 'Организуй турнир по командным играм в офисе. ЧГК, настольный теннис и другие направления. Не менее 10 участников в турнире',
        },
        {
          icon: '/assets/icons/group.png',
          title: 'Стань ментором в проекте «Kolesa Academy»',
          balls: '90 баллов ежемесячно',
          subtitle: 'Стань ментором академиков, поделись своими знаниями и помоги ребятам завершить Kolesa Academy успешно',
        },
        {
          icon: '/assets/icons/hands.png',
          title: 'Помощь HR team',
          balls: '50 баллов',
          subtitle: 'Помоги организовать мероприятие',
        },
        {
          icon: '/assets/icons/micro.png',
          title: 'Выступление на Demoday',
          balls: '30 баллов',
          subtitle: 'Выступи на Demoday внутри своей команды и поделись знаниями',
        },
        {
          icon: '/assets/icons/hand-plus.png',
          title: 'Другое',
          subtitle: 'Получай баллы если уже что-то сделано',
        },
      ],
    };
  },
};
</script>
