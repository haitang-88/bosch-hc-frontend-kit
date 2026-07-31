import BaseComponent from './baseComponent';

/**
 * components will add themselves to the component property
 * of the corresponding HTMLElement
 * This interface can be used to indicate to TypeScript that
 * this property actually exists
 */
export default interface ElementWithComponent<T = BaseComponent> extends HTMLElement {
  component: T;
}
