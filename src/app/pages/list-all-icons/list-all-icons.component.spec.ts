import { ListAllIconsComponent } from './list-all-icons.component';

describe('ListAllIconsComponent', () => {
  const component: ListAllIconsComponent = new ListAllIconsComponent();

  it('test variables', () => {
    expect(component.optionSelected).toBe('Icones Material');
    expect(component.options).toBe(undefined);
    expect(component.iconsMaterial).toBe(undefined);
    expect(component.iconsFontAwesome).toBe(undefined);
  });

  it('ngOnInit()', () => {
    component.ngOnInit();
  });

});
