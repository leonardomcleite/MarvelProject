import { animate, AnimationTriggerMetadata, group, query, style, transition, trigger, state } from '@angular/animations';

export class Animations {

  /**
   * Transição, onde os components aparecem debaixo para cima ao renderizar elemento
   * [@FadeInAndFadeOut]
   */
  public static FadeInAndFadeOut: AnimationTriggerMetadata = trigger('FadeInAndFadeOut', [
    transition(':enter', [
      style({
        transform: 'translateY(50%)'
      }),
      animate('.3s', style({
        transform: 'translateY(0%)'
      }))
    ]),
    transition(':leave', [
      style({
        transform: 'translateY(0%)'
      }),
      animate('.3s', style({
        transform: 'translateY(50%)'
      }))
    ])
  ]);

  /**
   * Transição, onde os components aparecem debaixo para cima incrementalmente, ou seja passando um
   * index a animação vai fazer um a um [@FadeInAndFadeOutIncremental]="index"
   */
  public static FadeInAndFadeOutIncremental: AnimationTriggerMetadata = trigger('FadeInAndFadeOutIncremental', [
    transition(':increment', group([
      query(':enter', [
        style({
          transform: 'translateY(50%)'
        }),
        animate('.3s', style({
          transform: 'translateY(0%)'
        }))
      ])
    ])),
    transition(':decrement', group([
      query(':enter', [
        style({
          transform: 'translateY(0%)'
        }),
        animate('.3s', style({
          transform: 'translateY(50%)'
        }))
      ])
    ]))
  ]);

  /**
   * Transição, onde os components surgem da opacidade começando em 0 à 1
   */
  public static arise: AnimationTriggerMetadata = trigger('arise', [
    transition(':enter', [
      style({opacity: 0}),
      animate('.4s', style({opacity: 1}))
    ]),
    transition(':leave', [
      style({opacity: 1}),
      animate('.4s', style({opacity: 0}))
    ])
  ]);

  /**
   * Transição, onde os components surgem da opacidade começando em 0 à 1
   */
  public static barFilterPosition: AnimationTriggerMetadata = trigger('barFilterPosition', [
    state('1', style({
      'position': 'fixed',
      'top': '48px',
      'margin-bottom': '50px',
      'z-index': '999',
      'width': '100%',
    })),
  ]);
}
