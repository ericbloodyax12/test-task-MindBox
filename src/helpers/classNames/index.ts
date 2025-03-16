export type Mods = Record<string, boolean | string | undefined>;

/**
 * Генератор классов
 * @param cls название класса(главный класс)
 * @param mods ключ - название класса, значение bool. если bool = true, то добавляется этот класс
 * @param additional массив дополнительных классов
 * @returns строку классов
 * @example classNames('someClass', { hovered: true, selectable: false }, ['class1', 'class2'])
 * -> 'someClass class1 class2 hovered'
 */
export function classNames(cls: string, mods: Mods = {}, additional: Array<string | undefined> = []): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
}
