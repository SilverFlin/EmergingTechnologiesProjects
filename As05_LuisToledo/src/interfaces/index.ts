interface BaseDAO<T> {
    save(entity: T): Promise<T>;
}