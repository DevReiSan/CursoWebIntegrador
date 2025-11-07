package com.UTP.TpIntegrado.market.domain.repository;

import java.util.List;
import java.util.Optional;

import com.UTP.TpIntegrado.market.domain.Purchase;

public interface PurchaseRepository {
    List<Purchase> getAll();
    Optional<List<Purchase>>getByClient(String ClientId);
    Purchase save(Purchase purchase);
}
