import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

export class Animations {

    public static FadeIn: AnimationTriggerMetadata = trigger('FadeIn', [
        transition(':enter', [
            style({opacity: '0'}),
            animate('300ms ease-in', style({opacity: '1'}))
        ])
    ]);

    public static FadeOut: AnimationTriggerMetadata = trigger('FadeOut', [
        transition(':leave', [
            style({opacity: '1'}),
            animate('300ms ease-out', style({opacity: '0'}))
        ])
    ]);

    public static FadeInOut: AnimationTriggerMetadata = trigger('FadeInOut', [
        transition(':enter', [
            style({opacity: '0'}),
            animate('300ms ease-in', style({opacity: '1'}))
        ]),
        transition(':leave', [
            style({opacity: '1'}),
            animate('300ms ease-out', style({opacity: '0'}))
        ])
    ]);

    public static HorizontalFadeIn: AnimationTriggerMetadata = trigger('HorizontalFadeIn', [
        transition(':enter', [
            style({width: '0', opacity: '0'}),
            animate('300ms ease-in', style({width: '*', opacity: '1'}))
        ])
    ]);

    public static HorizontalFadeOut: AnimationTriggerMetadata = trigger('HorizontalFadeOut', [
        transition(':leave', [
            style({width: '*', opacity: '1'}),
            animate('300ms ease-out', style({width: '0', opacity: '0'}))
        ])
    ]);

    public static HorizontalFadeInOut: AnimationTriggerMetadata = trigger('HorizontalFadeInOut', [
        transition(':enter', [
            style({width: '0', opacity: '0'}),
            animate('300ms ease-in', style({width: '*', opacity: '1'}))
        ]),
        transition(':leave', [
            style({width: '*', opacity: '1'}),
            animate('300ms ease-out', style({width: '0', opacity: '0'}))
        ])
    ]);

    public static VerticalFadeIn: AnimationTriggerMetadata = trigger('VerticalFadeIn', [
        transition(':enter', [
            style({height: '0', opacity: '0'}),
            animate('300ms ease-in', style({height: '*', opacity: '1'}))
        ])
    ]);

    public static VerticalFadeOut: AnimationTriggerMetadata = trigger('VerticalFadeOut', [
        transition(':leave', [
            style({height: '*', opacity: '1'}),
            animate('300ms ease-out', style({height: '0', opacity: '0'}))
        ])
    ]);

    public static VerticalFadeInOut: AnimationTriggerMetadata = trigger('VerticalFadeInOut', [
        transition(':enter', [
            style({height: '0', opacity: '0'}),
            animate('300ms ease-in', style({height: '*', opacity: '1'}))
        ]),
        transition(':leave', [
            style({height: '*', opacity: '1'}),
            animate('300ms ease-out', style({height: '0', opacity: '0'}))
        ])
    ]);

}
