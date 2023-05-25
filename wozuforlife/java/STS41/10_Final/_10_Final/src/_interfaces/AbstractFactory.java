package _interfaces;

public interface AbstractFactory<T> {
	
	T create(String type);
}
